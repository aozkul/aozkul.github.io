import test from 'node:test';
import assert from 'node:assert/strict';
import {IndustrialPipeline} from '../industrial-model.mjs';

const ticks = (model, count) => { for (let i = 0; i < count; i++) model.tick(); };
test('reproducible synthetic stream; reset reproduces the same run', () => {
  const a = new IndustrialPipeline(), b = new IndustrialPipeline();
  ticks(a, 100); ticks(b, 100);
  assert.deepEqual(a.snapshot(), b.snapshot());
  assert.equal(a.snapshot().source, 'synthetic');
  const expected = a.snapshot(); a.reset(); ticks(a, 100);
  assert.deepEqual(a.snapshot(), expected);
  const different = new IndustrialPipeline({seed: 43}); ticks(different, 100);
  assert.notDeepEqual(different.lastEvent, a.lastEvent);
});
test('offline buffering and ordered recovery yield the uninterrupted KPI result', () => {
  const connected = new IndustrialPipeline(), interrupted = new IndustrialPipeline();
  ticks(connected, 50); ticks(interrupted, 5);
  const frozen = interrupted.snapshot();
  interrupted.online = false; ticks(interrupted, 20);
  assert.equal(interrupted.edge.length, 60);
  assert.equal(interrupted.processed, frozen.api_processed);
  assert.equal(interrupted.snapshot().good_parts, frozen.good_parts);
  assert.equal(interrupted.snapshot().data_age_seconds, 20);
  interrupted.online = true; ticks(interrupted, 25);
  assert.deepEqual(interrupted.snapshot(), connected.snapshot());
  assert.deepEqual(interrupted.machines, connected.machines);
});
test('capacity overflow is explicit, bounded and conserves event accounting', () => {
  const m = new IndustrialPipeline({edgeCapacity: 9, brokerCapacity: 6});
  m.online = false; ticks(m, 6);
  assert.equal(m.generated, 18); assert.equal(m.edge.length, 9); assert.equal(m.dropped, 9);
  assert.deepEqual(m.edge.map(e => e.sequence), [1,1,1,2,2,2,3,3,3]);
  m.online = true;
  for (let i = 0; i < 20; i++) {
    m.tick();
    assert.ok(m.broker.length <= 6 && m.edge.length <= 9);
    assert.equal(m.generated, m.processed + m.edge.length + m.broker.length + m.dropped);
  }
});
test('broker backpressure does not acknowledge or discard unaccepted edge events', () => {
  const m = new IndustrialPipeline({brokerCapacity: 3});
  m.online = false; ticks(m, 4); m.online = true;
  m.flush({consumeLimit: 0}); assert.equal(m.accepted, 3); assert.equal(m.edge.length, 9);
  const head = m.edge[0]; m.flush({consumeLimit: 0});
  assert.equal(m.edge[0], head); assert.equal(m.accepted, 3);
  m.flush(); m.flush(); m.flush(); m.flush();
  assert.equal(m.processed, 12); assert.equal(m.edge.length, 0); assert.equal(m.broker.length, 0);
});
test('KPI projection uses only delivered completed cycles, and redelivery is idempotent', () => {
  const m = new IndustrialPipeline();
  assert.equal(m.snapshot().quality_percent, null);
  assert.equal(m.snapshot().mean_cycle_seconds, null);
  const event = (sequence, good, duration) => ({source:'synthetic', machine_id:'SIM-01', sequence,
    simulated_second:sequence, completed:true, good, cycle_seconds:duration, temperature_c:60});
  const first = event(1, true, 3), second = event(2, false, 5);
  m.consume(first); m.consume(second); m.consume(first); m.consume(second);
  assert.equal(m.processed, 2); assert.equal(m.duplicates, 2);
  assert.equal(m.snapshot().quality_percent, 50); assert.equal(m.snapshot().mean_cycle_seconds, 4);
  assert.equal(m.snapshot().good_parts, 1); assert.equal(m.snapshot().rejected_parts, 1);
});
test('disconnecting the edge link still allows already accepted broker events to be consumed', () => {
  const m = new IndustrialPipeline();
  m.online = false; ticks(m, 4); m.online = true;
  m.flush({consumeLimit:0});
  assert.equal(m.broker.length,12); assert.equal(m.processed,0);
  m.online = false; m.tick();
  assert.equal(m.processed,6); assert.equal(m.broker.length,6); assert.equal(m.edge.length,3);
  m.tick(); assert.equal(m.processed,12); assert.equal(m.broker.length,0); assert.equal(m.edge.length,6);
});
test('long runs retain bounded queues, chart and per-machine state', () => {
  const m = new IndustrialPipeline(); ticks(m, 10000);
  assert.equal(m.processed, 30000); assert.equal(m.edge.length, 0); assert.equal(m.broker.length, 0);
  assert.equal(m.history.length, 30); assert.equal(Object.keys(m.machines).length, 3);
  assert.equal(m.dropped, 0);
});

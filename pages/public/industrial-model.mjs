// Independently authored teaching model. No device, company or production data.
export const MACHINES = ['SIM-01', 'SIM-02', 'SIM-03'];

export class IndustrialPipeline {
  constructor({seed = 42, edgeCapacity = 180, brokerCapacity = 48} = {}) {
    if (![edgeCapacity, brokerCapacity].every(n => Number.isInteger(n) && n > 0)) throw new Error('Invalid queue capacity');
    this.seed = seed >>> 0;
    this.edgeCapacity = edgeCapacity;
    this.brokerCapacity = brokerCapacity;
    this.reset();
  }
  reset() {
    this.randomState = this.seed;
    this.time = 0;
    this.online = true;
    this.edge = [];
    this.broker = [];
    this.generated = this.accepted = this.processed = this.dropped = this.duplicates = 0;
    this.lastEvent = null;
    this.history = [];
    this.machines = Object.fromEntries(MACHINES.map(id => [id, {
      sequence: 0, samples: 0, good: 0, rejected: 0, cycleTotal: 0, latest: null
    }]));
  }
  random() {
    this.randomState = (Math.imul(1664525, this.randomState) + 1013904223) >>> 0;
    return this.randomState / 4294967296;
  }
  tick() {
    this.time++;
    MACHINES.forEach((machine, index) => {
      const completed = (this.time + index) % 4 === 0;
      const event = Object.freeze({
        schema_version: 1, source: 'synthetic', event_id: `${machine}:${this.time}`,
        machine_id: machine, sequence: this.time, simulated_second: this.time,
        temperature_c: +(61 + index * 3 + Math.sin(this.time / 9 + index) * 4 + this.random()).toFixed(1),
        vibration_mm_s: +(1.2 + this.random() * .7).toFixed(2),
        completed, good: completed ? this.random() > .07 : null,
        cycle_seconds: completed ? +(3.6 + this.random() * .8).toFixed(2) : null
      });
      this.generated++;
      // Drop newest on overflow; retained FIFO events keep their original order.
      if (this.edge.length < this.edgeCapacity) this.edge.push(event);
      else this.dropped++;
    });
    this.flush();
    return this.snapshot();
  }
  flush({publishLimit = 12, consumeLimit = 6} = {}) {
    // Broker acceptance is the acknowledgement: backpressure retains edge data.
    const count = this.online ? Math.min(this.edge.length, publishLimit, this.brokerCapacity - this.broker.length) : 0;
    this.broker.push(...this.edge.splice(0, count));
    this.accepted += count;
    for (const event of this.broker.splice(0, consumeLimit)) this.consume(event);
  }
  consume(event) {
    const machine = this.machines[event.machine_id];
    if (!machine || event.source !== 'synthetic' || !Number.isInteger(event.sequence) || event.sequence < 1) throw new Error('Invalid event');
    // Ordered per-machine stream: a high-water mark rejects redelivery.
    if (event.sequence <= machine.sequence) { this.duplicates++; return; }
    machine.sequence = event.sequence;
    machine.samples++;
    machine.latest = event;
    if (event.completed) {
      if (event.good) machine.good++;
      else machine.rejected++;
      machine.cycleTotal += event.cycle_seconds;
    }
    this.processed++;
    this.lastEvent = event;
    // One temperature point per simulated second; bounded visualization memory.
    const point = {second: event.simulated_second, temperature: this.meanTemperature()};
    if (this.history.at(-1)?.second === point.second) this.history[this.history.length - 1] = point;
    else this.history.push(point);
    if (this.history.length > 30) this.history.shift();
  }
  meanTemperature() {
    const values = Object.values(this.machines).filter(m => m.latest);
    return values.length ? values.reduce((n, m) => n + m.latest.temperature_c, 0) / values.length : null;
  }
  snapshot() {
    const values = Object.values(this.machines);
    const good = values.reduce((n, m) => n + m.good, 0);
    const rejected = values.reduce((n, m) => n + m.rejected, 0);
    const total = good + rejected;
    return {
      source: 'synthetic', simulated_second: this.time,
      generated: this.generated, edge_pending: this.edge.length, broker_pending: this.broker.length,
      broker_accepted: this.accepted, api_processed: this.processed, dropped: this.dropped,
      good_parts: good, rejected_parts: rejected,
      quality_percent: total ? +(good / total * 100).toFixed(1) : null,
      mean_cycle_seconds: total ? +(values.reduce((n, m) => n + m.cycleTotal, 0) / total).toFixed(2) : null,
      mean_temperature_c: this.meanTemperature() === null ? null : +this.meanTemperature().toFixed(1),
      data_age_seconds: this.lastEvent ? this.time - this.lastEvent.simulated_second : null,
      latest_event: this.lastEvent
    };
  }
}

import {IndustrialPipeline} from './industrial-model.mjs?v=20260918-signal1';

const copy = {
  tr: {
    eyebrow:'ÖNE ÇIKAN / BAĞIMSIZ ENDÜSTRİYEL DEMO', title1:'Makineden karara.', title2:'Verinin yolculuğu.',
    intro:'Üç sentetik makine. Tek bir veri hattı. Bağlantıyı kes, verinin edge buffer’da birikmesini izle; yeniden bağlanınca KPI ekranının nasıl toparlandığını gör.',
    badge:'TARAYICI SİMÜLASYONU · %100 SENTETİK', reset:'Sıfırla', machines:'Sentetik makineler', projection:'API görünümü', dashboard:'KPI ekranı',
    good:'Sağlam parça', goodHint:'API’ye ulaşan üretim', quality:'Kalite oranı', qualityHint:'Sağlam / toplam parça', cycle:'Ortalama çevrim', cycleHint:'Tamamlanan çevrimler', pending:'Bekleyen olay', pendingHint:'Edge + broker kuyruğu',
    temperature:'Ortalama makine sıcaklığı', chartRange:'55–75 °C · son 30 örnek', threeMachines:'3 sanal makine',
    details:'Veri sözleşmesi ve mimari notları', scopeTitle:'Bu örnek neyi gösteriyor?',
    scope:'Üretici → sınırlı FIFO buffer → ACK ile broker kabulü → tekilleştirilmiş API görünümü → KPI. Bağlantı kesintisi edge–broker hattına uygulanır. Yeniden bağlanınca kuyruklar sırayla boşalır.',
    limits:'Bütün bileşenler tarayıcı belleğinde çalışır. Gerçek MQTT/Kafka sunucusu, HTTP API veya kalıcı disk buffer’ı yoktur. Sayfa yenilenince durum sıfırlanır. 180 olaylık edge kapasitesi dolarsa yeni olaylar düşürülür ve sayaçta gösterilir.',
    formulas:'KPI’lar yalnızca API’ye ulaşan olaylardan hesaplanır. Kalite = sağlam / tamamlanan parça. Ortalama çevrim = tamamlanan çevrim sürelerinin ortalaması. Üretim verimliliği (OEE) iddiası içermez.',
    jsonTitle:'API görünümü · yerel JSON', disclaimer:'Sıfırdan hazırlanmış bağımsız bir portföy örneği. İşveren kodu, şirket içi mimari veya gerçek üretim verisi kullanılmaz. Üretilen demo verisi cihazından dışarı gönderilmez.', experience:'Mühendislik deneyimim',
    disconnect:'Bağlantıyı kes', reconnect:'Yeniden bağlan', pause:'Duraklat', resume:'Devam et',
    events:'olay', delivered:'iletildi', processed:'işlendi', fresh:'Güncel', waiting:'Veri bekleniyor', stale:'sn geride',
    running:'Akış açık. Sentetik olaylar KPI ekranına ulaşıyor.', offline:'Edge–broker bağlantısı kesik. Veri edge buffer’da tutuluyor.', recovering:'Bağlantı geri geldi. Biriken olaylar işleniyor.', paused:'Simülasyon duraklatıldı; saat ve veri üretimi durdu.', overflow:'Buffer doldu. Yeni olaylar düşürülüyor; kayıp sayacı artıyor.',
    delivery:'FIFO · ACK · 3 olay / simülasyon saniyesi', loss:'Kapasite taşması', flow:'Veri akışı', chartTitle:'Sentetik makine sıcaklığı geçmişi',
    queued:'broker kuyruğunda', snapshot:'Son API verisi'
  },
  en: {
    eyebrow:'FEATURED / INDEPENDENT INDUSTRIAL DEMO', title1:'From machine to insight.', title2:'Follow the data.',
    intro:'Three synthetic machines. One data pipeline. Disconnect the link, watch events collect at the edge, then reconnect to see the KPI dashboard catch up.',
    badge:'BROWSER SIMULATION · 100% SYNTHETIC', reset:'Reset', machines:'Synthetic machines', projection:'API projection', dashboard:'KPI dashboard',
    good:'Good parts', goodHint:'Production received by the API', quality:'Quality rate', qualityHint:'Good / total completed parts', cycle:'Mean cycle time', cycleHint:'Completed cycles only', pending:'Pending events', pendingHint:'Edge + broker queues',
    temperature:'Mean machine temperature', chartRange:'55–75 °C · last 30 samples', threeMachines:'3 virtual machines',
    details:'Data contract & architecture notes', scopeTitle:'What does this example demonstrate?',
    scope:'Producer → bounded FIFO buffer → broker acknowledgement → deduplicated API projection → KPI. The disconnect affects the edge–broker link. On reconnect, queued events drain in order.',
    limits:'All components run in browser memory. There is no real MQTT/Kafka server, HTTP API or persistent disk buffer. Reloading resets the state. When the 180-event edge buffer fills, new events are dropped and counted.',
    formulas:'KPIs use only events delivered to the API. Quality = good / completed parts. Mean cycle time = average duration of completed cycles. No overall equipment effectiveness (OEE) claim is made.',
    jsonTitle:'API projection · local JSON', disclaimer:'An independently authored portfolio example. No employer code, internal company architecture or real production data is used. Generated demo data never leaves your device.', experience:'My engineering experience',
    disconnect:'Disconnect link', reconnect:'Reconnect link', pause:'Pause', resume:'Resume',
    events:'events', delivered:'delivered', processed:'processed', fresh:'Up to date', waiting:'Awaiting data', stale:'s behind',
    running:'Link active. Synthetic events are reaching the KPI dashboard.', offline:'Edge–broker link disconnected. Events are buffered at the edge.', recovering:'Link restored. Buffered events are catching up.', paused:'Simulation paused; the clock and data generation have stopped.', overflow:'Buffer full. New events are dropped and the loss counter is increasing.',
    delivery:'FIFO · ACK · 3 events / simulated second', loss:'Capacity drops', flow:'Data pipeline', chartTitle:'Synthetic machine temperature history',
    queued:'in broker queue', snapshot:'Latest API data'
  }
};

const $ = id => document.getElementById(`demo-${id}`);
const model = new IndustrialPipeline();
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = motion.matches, inView = false, language, words;
const number = (n, digits = 0) => new Intl.NumberFormat(language === 'tr' ? 'tr-TR' : 'en-GB', {maximumFractionDigits:digits}).format(n);
function text(id, value) { $(id).textContent = value; }
function localize() {
  language = document.documentElement.lang === 'en' ? 'en' : 'tr'; words = copy[language];
  document.querySelectorAll('[data-demo-text]').forEach(node => {node.textContent = words[node.dataset.demoText];});
  $('flow').setAttribute('aria-label', words.flow);
  render();
}
function render() {
  const s = model.snapshot();
  $('console').dataset.online = String(model.online);
  text('network', model.online ? words.disconnect : words.reconnect);
  text('pause', paused ? words.resume : words.pause);
  text('generated', `${number(s.generated)} ${words.events}`);
  text('edge', `${number(s.edge_pending)} / ${model.edgeCapacity}`);
  text('broker', `${number(s.broker_accepted)} ${words.delivered}`);
  $('broker').title = `${s.broker_pending} ${words.queued}`;
  text('api', `${number(s.api_processed)} ${words.processed}`);
  text('freshness', s.data_age_seconds === null ? words.waiting : s.data_age_seconds === 0 ? words.fresh : `${number(s.data_age_seconds)} ${words.stale}`);
  const status = paused ? 'paused' : !model.online ? (s.edge_pending === model.edgeCapacity ? 'overflow' : 'offline') : s.edge_pending + s.broker_pending > 0 ? 'recovering' : 'running';
  // Announce state transitions only, not every telemetry sample.
  if ($('status').textContent !== words[status]) text('status', words[status]);
  text('clock', `SIM +${String(Math.floor(model.time / 60)).padStart(2,'0')}:${String(model.time % 60).padStart(2,'0')}`);
  text('good', number(s.good_parts));
  text('quality', s.quality_percent === null ? '—' : `${number(s.quality_percent,1)}%`);
  text('cycle', s.mean_cycle_seconds === null ? '—' : `${number(s.mean_cycle_seconds,2)} s`);
  text('pending', number(s.edge_pending + s.broker_pending));
  text('temperature', s.mean_temperature_c === null ? '— °C' : `${number(s.mean_temperature_c,1)} °C`);
  text('delivery', words.delivery);
  text('loss', `${words.loss}: ${number(s.dropped)} ${words.events}`);
  $('loss').classList.toggle('has-loss', s.dropped > 0);
  const points = model.history.map((p, index) => [5 + index / 29 * 450, 112 - (p.temperature - 55) / 20 * 102]);
  $('line').setAttribute('d', points.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' '));
  $('area').setAttribute('d', points.length ? `M${points[0][0]},122 ` + points.map(p => `L${p[0]},${p[1]}`).join(' ') + ` L${points.at(-1)[0]},122 Z` : '');
  $('point').style.display = points.length ? '' : 'none';
  if (points.length) { $('point').setAttribute('cx', points.at(-1)[0]); $('point').setAttribute('cy', points.at(-1)[1]); }
  text('chart-title', `${words.chartTitle}. ${words.snapshot}: ${$('temperature').textContent}.`);
  if ($('details').open) renderJSON();
}
function renderJSON() { text('json', JSON.stringify(model.snapshot(), null, 2)); }
$('network').addEventListener('click', () => {model.online = !model.online; render();});
$('pause').addEventListener('click', () => {paused = !paused; render();});
$('reset').addEventListener('click', () => {model.reset(); render();});
$('details').addEventListener('toggle', renderJSON);
motion.addEventListener('change', event => {if (event.matches) {paused = true; render();}});
new IntersectionObserver(entries => {inView = entries[0].isIntersecting;}, {threshold:0}).observe(document.getElementById('industrial-demo'));
new MutationObserver(localize).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
// No wall-clock catch-up: background tabs and off-screen demos do no work.
setInterval(() => {if (!paused && inView && !document.hidden) {model.tick(); render();}}, 1000);
document.querySelectorAll('#industrial-demo output').forEach(node => node.setAttribute('aria-live', 'off'));
$('controls').hidden = false;
localize();

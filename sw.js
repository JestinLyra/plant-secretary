const CACHE='plant-secretary-v92';
const ASSETS=[
  './',
  './index.html',
  './style.css?v=92',
  './app.js?v=92',
  './manifest.json',
  './icon.svg',
  'assets/icons/calendar-droplet-approved.png',
  'assets/icons/watering-check-approved.png',
  'assets/icons/home-leaf-circle-approved.png',
  'assets/icons/undo-watering-approved.png'
  ,'assets/icons/direct-sun-pencil.png'
  ,'assets/icons/indirect-sun-pencil.png'
  ,'assets/icons/minimal-sun-pencil.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});

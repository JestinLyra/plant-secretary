const CACHE='plant-secretary-v41';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./home-art.css','./nav-art.css','./home-art.js','./my-plants-display.js','./app-prefs.js','./app-actions.js','./photo-editor.js','./profile-performance.js','./profile-care-summary-v2.js','./care-history-edit.js','./plant-origin.js','./app-stability.js','./assets/care-history-edit.png','./assets/home-sunlight.webp','./assets/home-ph.webp','./assets/home-controls.webp','./assets/water-drop.webp','./assets/heading-logo.jpg','./assets/nav-home.webp','./assets/nav-plants.webp','./assets/nav-projects.webp','./assets/nav-insights.webp','./assets/nav-more.webp'];
const decorate=async response=>{
  let text=await response.text();
  text=text
    .replace('<div class="logo">🌿</div>','<span class="heading-logo-frame"><img class="heading-logo" src="assets/heading-logo.jpg" alt=""></span>')
    .replace('Good plants<br>Brighter days ♡','Healthy plants<br>Happy hearts ♡')
    .replace('${lightIcon(p.light)} <b>Light</b><br>${p.light}','${lightIcon(p.light)} <b>Sunlight</b><br>${p.light==="sun"?"direct":p.light}')
    .replace('💧 <b>Water</b>','<b>Water</b>')
    .replace('🌤️ <b>Sunlight</b>','<b>Sunlight</b>')
    .replace('☀️ <b>Sunlight</b>','<b>Sunlight</b>')
    .replace('🪴 <b>Soil</b><br>Editable in care guide','<b>Soil</b><br><span data-care-summary="soil"></span>')
    .replace('🧪 <b>pH</b>','<b>pH</b>')
    .replace('🌱 <b>Feed</b><br>Record as needed','<b>Feed</b><br><span data-care-summary="feed"></span>')
    .replace('✂️ <b>Prune / Pinch</b><br>Track in history','<b>Prune / Pinch</b><br><span data-care-summary="prune"></span>');
  const html=text
    .replace('</head>','<link rel="stylesheet" href="home-art.css?v=17"><link rel="stylesheet" href="nav-art.css?v=1.0.29"></head>')
    .replace('</body>','<script src="home-art.js?v=9"></script><script src="my-plants-display.js?v=1.0.27"></script><script src="app-prefs.js?v=1.0.29"></script><script src="app-actions.js?v=1.0.6"></script><script src="photo-editor.js?v=1.0.14"></script><script src="profile-performance.js?v=1.0.28"></script><script src="profile-care-summary-v2.js?v=1.0.19"></script><script src="care-history-edit.js?v=1.0.23"></script><script src="plant-origin.js?v=1.0.24"></script><script src="app-stability.js?v=1.0.27"></script></body>');
  return new Response(html,{status:response.status,statusText:response.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
};
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const url=new URL(e.request.url);if(e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/plant-secretary/')){e.respondWith(fetch(e.request).then(decorate).catch(()=>caches.match('./index.html').then(r=>r?decorate(r):Response.error())));return;}e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));});
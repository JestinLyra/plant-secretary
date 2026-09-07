const CACHE='plant-secretary-v19';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./home-art.css','./home-art.js','./my-plants-display.js','./app-prefs.js','./app-actions.js','./photo-editor.js','./assets/home-sunlight.webp','./assets/home-ph.webp','./assets/home-controls.webp','./assets/water-drop.webp'];
const decorate=async response=>{
  const text=await response.text();
  const html=text.replace('</head>','<link rel="stylesheet" href="home-art.css?v=13"></head>').replace('</body>','<script src="home-art.js?v=9"></script><script src="my-plants-display.js?v=1.0.5"></script><script src="app-prefs.js?v=1.0.6"></script><script src="app-actions.js?v=1.0.6"></script><script src="photo-editor.js?v=1.0.6"></script></body>');
  return new Response(html,{status:response.status,statusText:response.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
};
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(e.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/plant-secretary/')){
    e.respondWith(fetch(e.request).then(decorate).catch(()=>caches.match('./index.html').then(r=>r?decorate(r):Response.error())));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});
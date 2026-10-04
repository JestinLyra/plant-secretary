const CACHE='plant-secretary-v143';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./home-art.css','./undo-control.css','./add-plant-icon.css','./nav-art.css','./more-art.css','./home-art.js','./my-plants-display.js','./botanical-care.js','./app-prefs.js','./app-actions.js','./project-editor.js','./photo-editor.js','./photo-menu-fix.js','./profile-performance.js','./profile-care-summary-v2.js','./care-history-edit.js','./care-history-control.js','./plant-origin.js','./app-stability.js','./profile-identity.js','./assets/edit-control.svg','./assets/care-guides.webp','./assets/plant-notes.webp','./assets/reminders.webp','./assets/weather.webp','./assets/backup-restore.webp','./assets/settings.webp','./assets/about-plant-secretary.webp','./assets/undo-plant.webp','./assets/home-sunlight.webp','./assets/home-ph.webp','./assets/home-controls.webp','./assets/water-drop.webp','./assets/heading-logo.webp','./assets/nav-home.webp','./assets/nav-plants.webp','./assets/nav-projects.webp','./assets/nav-insights.webp','./assets/nav-more.webp'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    await Promise.all(windows.map(client=>client.navigate(client.url).catch(()=>null)));
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/')){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
          return response;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
      if(response&&response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});
      }
      return response;
    }))
  );
});

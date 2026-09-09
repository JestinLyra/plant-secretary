(()=>{
  const VERSION='v1.0.35';
  const WHITE_ORCHID_ID='p14';
  const CLEANUP_KEY='plant-secretary-cleanup-white-orchid-photo-v1';
  window.PLANT_SECRETARY_VERSION=VERSION;

  function setTextIfChanged(el,text){if(el&&el.textContent!==text)el.textContent=text}
  function applyVersion(root=document){
    root.querySelectorAll?.('.version-label').forEach(el=>setTextIfChanged(el,VERSION));
    root.querySelectorAll?.('.more-card small,#utilityBody p').forEach(el=>{
      const current=el.textContent||'';
      if(/Version\s+\d+\.\d+\.\d+/i.test(current)){
        const next=current.replace(/Version\s+\d+\.\d+\.\d+/ig,`Version ${VERSION.replace(/^v/,'')}`);
        setTextIfChanged(el,next);
      }
    });
  }

  function setDefaultWateringView(){
    const selector=document.getElementById('homeFilter');
    if(!selector)return;
    selector.value='today';
    if(typeof window.renderWatering==='function')window.renderWatering();
  }

  async function removeWhiteOrchidPhotoOnce(){
    if(localStorage.getItem(CLEANUP_KEY)==='done')return;
    try{
      if(typeof window.db!=='function')return;
      const d=await window.db();
      await new Promise((resolve,reject)=>{
        const tx=d.transaction('photos','readwrite');
        tx.objectStore('photos').delete(WHITE_ORCHID_ID);
        tx.oncomplete=resolve;
        tx.onerror=()=>reject(tx.error);
      });
      d.close();
      try{const key='plant-secretary-photo-view-v1';const views=JSON.parse(localStorage.getItem(key)||'{}');if(Object.prototype.hasOwnProperty.call(views,WHITE_ORCHID_ID)){delete views[WHITE_ORCHID_ID];localStorage.setItem(key,JSON.stringify(views));}}catch(_){ }
      localStorage.setItem(CLEANUP_KEY,'done');
      if(typeof window.renderCollection==='function')window.renderCollection();
      if(document.querySelector('#plantModal.open')&&typeof window.openModal==='function'){const white=(window.plants||[]).find(p=>p.id===WHITE_ORCHID_ID);if(white)window.openModal(WHITE_ORCHID_ID);}
    }catch(err){console.warn('White orchid photo cleanup did not complete',err);}
  }

  applyVersion();setDefaultWateringView();removeWhiteOrchidPhotoOnce();
  const obs=new MutationObserver(records=>{for(const record of records){for(const node of record.addedNodes){if(node.nodeType===1)applyVersion(node);}}applyVersion(document);});
  obs.observe(document.body,{childList:true,subtree:true});
})();
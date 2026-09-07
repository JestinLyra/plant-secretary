(()=>{
  const VERSION='v1.0.6';
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

  applyVersion();
  setDefaultWateringView();
  const obs=new MutationObserver(records=>{
    for(const record of records){
      for(const node of record.addedNodes){
        if(node.nodeType===1)applyVersion(node);
      }
    }
    applyVersion(document);
  });
  obs.observe(document.body,{childList:true,subtree:true});
})();
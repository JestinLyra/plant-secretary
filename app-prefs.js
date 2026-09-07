(()=>{
  const VERSION='v1.0.5';
  window.PLANT_SECRETARY_VERSION=VERSION;

  function applyVersion(){
    document.querySelectorAll('.version-label').forEach(el=>el.textContent=VERSION);
    document.querySelectorAll('.more-card small,#utilityBody p').forEach(el=>{
      if(/Version\s+\d+\.\d+\.\d+/i.test(el.textContent)){
        el.textContent=el.textContent.replace(/Version\s+\d+\.\d+\.\d+/ig,`Version ${VERSION.replace(/^v/,'')}`);
      }
    });
  }

  function setDefaultWateringView(){
    const selector=document.getElementById('homeFilter');
    if(!selector) return;
    selector.value='today';
    if(typeof window.renderWatering==='function') window.renderWatering();
  }

  applyVersion();
  setDefaultWateringView();
  const obs=new MutationObserver(applyVersion);
  obs.observe(document.body,{childList:true,subtree:true,characterData:true});
})();
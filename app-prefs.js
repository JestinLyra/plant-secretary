(()=>{
  const VERSION='v1.0.4';

  function applyVersion(){
    const visible=document.querySelector('.version-label');
    if(visible) visible.textContent=VERSION;

    document.querySelectorAll('.more-card small').forEach(el=>{
      if(/Version\s+\d+\.\d+\.\d+/i.test(el.textContent)){
        el.textContent=el.textContent.replace(/Version\s+\d+\.\d+\.\d+/i,`Version ${VERSION.replace(/^v/,'')}`);
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
})();

(()=>{
  const VERSION='v1.0.133';
  window.PLANT_SECRETARY_VERSION=VERSION;

  function applyHomeHeader(){
    const tag=document.querySelector('header .tag');
    if(tag)tag.textContent='Leaf it to me.';
    const date=document.getElementById('dateLine');
    if(date){
      const now=new Date();
      const dow=['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'][now.getDay()];
      const mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][now.getMonth()];
      date.textContent=`Altona. ${dow} ${String(now.getDate()).padStart(2,'0')} ${mon} ${String(now.getFullYear()).slice(-2)}`;
    }
    document.querySelector('header .scribble')?.remove();
  }

  function setDefaultWateringView(){
    const selector=document.getElementById('homeFilter');
    if(!selector)return;
    selector.value='today';
    if(typeof window.renderWatering==='function')window.renderWatering();
  }

  applyHomeHeader();
  setDefaultWateringView();
})();

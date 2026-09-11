(()=>{
  document.addEventListener('click',e=>{
    const btn=e.target.closest?.('#careHistoryEditBtn');
    if(!btn)return;
    e.preventDefault();
    e.stopPropagation();
    window.PLANT_CARE_HISTORY_EDITOR?.open?.();
  },true);
})();

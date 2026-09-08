(()=>{
  // profile-care-summary-v2.js already applies its care tiles synchronously when
  // openModal() runs. Its additional whole-body MutationObserver re-applies the
  // same tiles after its own DOM rewrites, creating a self-triggering render loop.
  // Suppress only that redundant observer; all other MutationObservers keep
  // their normal behaviour.
  const NativeMutationObserver=window.MutationObserver;
  if(typeof NativeMutationObserver!=='function')return;

  window.MutationObserver=function(callback){
    let source='';
    try{source=String(new Error().stack||'')}catch(_){ }
    if(source.includes('profile-care-summary-v2.js')){
      return {
        observe(){},
        disconnect(){},
        takeRecords(){return[];}
      };
    }
    return new NativeMutationObserver(callback);
  };
  window.MutationObserver.prototype=NativeMutationObserver.prototype;
})();
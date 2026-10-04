(()=>{
  const PLANT_KEY='plant-secretary-v1',PROJECT_KEY='plant-secretary-projects-v1';
  const DATABASE='PlantSecretaryRecords',STORE='snapshots',REVISION_KEY='plant-secretary-record-revision';
  let revision=Date.now();
  let queue=Promise.resolve();
  function open(){return new Promise((resolve,reject)=>{
    const request=indexedDB.open(DATABASE,1);
    request.onupgradeneeded=()=>request.result.createObjectStore(STORE);
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
    request.onblocked=()=>reject(new Error('Plant record storage is blocked by another app window.'));
  })}
  async function read(){const database=await open();try{return await new Promise((resolve,reject)=>{
    const request=database.transaction(STORE,'readonly').objectStore(STORE).get('current');
    request.onsuccess=()=>{const snapshot=request.result||null;let localRevision=0;try{localRevision=Number(localStorage.getItem(REVISION_KEY))||0}catch(_){}resolve(snapshot&&localRevision>Number(snapshot.revision||0)?null:snapshot)};request.onerror=()=>reject(request.error);
  })}finally{database.close()}}
  async function write(snapshot){const database=await open();try{await new Promise((resolve,reject)=>{
    const transaction=database.transaction(STORE,'readwrite');
    transaction.objectStore(STORE).put(snapshot,'current');
    transaction.oncomplete=resolve;transaction.onerror=()=>reject(transaction.error);
    transaction.onabort=()=>reject(transaction.error||new Error('Plant record save was cancelled.'));
  })}finally{database.close()}}
  function persist(data){
    revision=Math.max(revision+1,Date.now());
    const snapshot=JSON.parse(JSON.stringify({plants:data.plants,projects:data.projects,revision}));
    const operation=queue.catch(()=>{}).then(async()=>{
      let localError=null,localSaved=false;
      try{localStorage.setItem(PLANT_KEY,JSON.stringify(snapshot.plants));localStorage.setItem(PROJECT_KEY,JSON.stringify(snapshot.projects));localStorage.setItem(REVISION_KEY,String(snapshot.revision));localSaved=true}catch(error){localError=error}
      try{await write(snapshot);return {storage:'indexedDB',localSaved}}
      catch(error){
        if(localSaved)return {storage:'localStorage',localSaved:true};
        const failure=new Error(`Neither plant storage method could save: ${localError?.name||'localStorage error'}; ${error?.name||'IndexedDB error'}.`);
        failure.name='PlantStorageError';throw failure;
      }
    });
    queue=operation;return operation;
  }
  window.PLANT_DATA_STORAGE={read,persist};
})();

(()=>{
  const $=s=>document.querySelector(s);
  let emptyPhotoId=null;

  function closeEmptyMenu(){
    const modal=$('#photoEmptyManageModal');
    if(modal)modal.classList.remove('open');
    emptyPhotoId=null;
  }

  function ensureEmptyMenu(){
    let modal=$('#photoEmptyManageModal');
    if(modal)return modal;
    modal=document.createElement('div');
    modal.id='photoEmptyManageModal';
    modal.className='modal';
    modal.innerHTML=`<div class="sheet photo-manage-sheet"><div class="sheethead"><h3>Photo</h3><button class="close" type="button" id="photoEmptyManageClose">×</button></div><div class="photo-manage-actions"><button class="secondary" type="button" id="photoUpload">Upload photo</button></div></div>`;
    document.body.appendChild(modal);
    modal.querySelector('#photoEmptyManageClose').onclick=closeEmptyMenu;
    modal.addEventListener('click',e=>{if(e.target===modal)closeEmptyMenu()});
    modal.querySelector('#photoUpload').onclick=()=>{
      const id=emptyPhotoId;
      closeEmptyMenu();
      if(id)window.PLANT_PHOTO_TOOLS?.managePhoto(id);
    };
    return modal;
  }

  async function openPhotoMenu(id){
    if(!id)return;
    let photo=null;
    try{photo=typeof getPhoto==='function'?await getPhoto(id):null}catch(_){photo=null}
    if(photo){
      window.PLANT_PHOTO_TOOLS?.managePhoto(id);
      return;
    }
    emptyPhotoId=String(id);
    ensureEmptyMenu().classList.add('open');
  }

  window.addEventListener('click',e=>{
    const target=e.target instanceof Element?e.target:null;
    const hero=target?.closest?.('.hero-photo');
    if(!hero)return;
    const id=hero.id?.replace(/^hero-/,'');
    if(!id)return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openPhotoMenu(id);
  },true);
})();
(()=>{
  function projectList(){try{return typeof projects!=='undefined'?projects:(window.projects||[])}catch(_){return window.projects||[]}}
  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function persist(){if(typeof save==='function')save()}
  function draw(){
    const host=document.getElementById('projectList');
    if(!host)return;
    const list=projectList();
    host.innerHTML=list.map(p=>`<button class="project project-edit-tile" type="button" data-project-edit="${esc(p.id)}" aria-label="Edit ${esc(p.title)}"><div class="project-copy"><b>${esc(p.title)}</b><div class="hint" style="margin:3px 0 0">${esc(p.type||'Plant project')}</div></div><span class="status ${p.status==='Done'?'done':''}">${esc(p.status||'To do')}</span></button>`).join('');
  }
  function closeEditor(){document.getElementById('projectEditModal')?.classList.remove('open')}
  function ensureEditor(){
    let modal=document.getElementById('projectEditModal');
    if(modal)return modal;
    modal=document.createElement('div');
    modal.id='projectEditModal';
    modal.className='modal';
    modal.innerHTML=`<div class="sheet project-edit-sheet"><div class="sheethead"><h3>Edit Project</h3><button class="close" type="button" data-project-close>×</button></div><form id="projectEditForm" class="formgrid"><input id="projectEditId" type="hidden"><label>Project name<input id="projectEditTitle" required></label><label>Type<input id="projectEditType" placeholder="e.g. Repotting, Propagation, Wishlist"></label><label>Status<select id="projectEditStatus"><option>To do</option><option>In progress</option><option>Done</option></select></label><div class="actions"><button class="secondary project-delete" type="button" id="projectDeleteBtn">Delete project</button><button class="primary" type="submit">Save changes</button></div></form></div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-project-close]'))closeEditor()});
    modal.querySelector('#projectEditForm').addEventListener('submit',e=>{
      e.preventDefault();
      const id=modal.querySelector('#projectEditId').value;
      const p=projectList().find(x=>String(x.id)===String(id));
      if(!p)return closeEditor();
      const title=modal.querySelector('#projectEditTitle').value.trim();
      if(!title)return;
      p.title=title;
      p.type=modal.querySelector('#projectEditType').value.trim()||'Plant project';
      p.status=modal.querySelector('#projectEditStatus').value;
      persist();draw();closeEditor();
      if(typeof toast==='function')toast('Project updated');
    });
    modal.querySelector('#projectDeleteBtn').addEventListener('click',()=>{
      const id=modal.querySelector('#projectEditId').value;
      const p=projectList().find(x=>String(x.id)===String(id));
      if(!p)return;
      if(!confirm(`Delete “${p.title}”?`))return;
      const list=projectList(),i=list.findIndex(x=>String(x.id)===String(id));
      if(i>=0)list.splice(i,1);
      persist();draw();closeEditor();
      if(typeof toast==='function')toast('Project deleted');
    });
    return modal;
  }
  function openEditor(id){
    const p=projectList().find(x=>String(x.id)===String(id));
    if(!p)return;
    const modal=ensureEditor();
    modal.querySelector('#projectEditId').value=p.id;
    modal.querySelector('#projectEditTitle').value=p.title||'';
    modal.querySelector('#projectEditType').value=p.type||'';
    modal.querySelector('#projectEditStatus').value=['To do','In progress','Done'].includes(p.status)?p.status:'To do';
    modal.classList.add('open');
    requestAnimationFrame(()=>modal.querySelector('#projectEditTitle')?.focus());
  }
  const style=document.createElement('style');
  style.textContent=`#projectList .project-edit-tile{width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer}#projectList .project-copy{min-width:0;flex:1 1 auto}#projectList .project-edit-tile .status{flex:0 0 auto;border:0}.project-edit-sheet .project-delete{color:var(--danger);border-color:#efcfd4}.project-edit-sheet .actions{margin-top:6px}@media(max-width:430px){#projectList .project-edit-tile{padding:14px}.project-edit-sheet .actions{display:grid;grid-template-columns:1fr 1fr}}`;
  document.head.appendChild(style);
  window.renderProjects=draw;
  document.addEventListener('click',e=>{
    const tile=e.target.closest('[data-project-edit]');
    if(!tile)return;
    e.preventDefault();e.stopPropagation();
    openEditor(tile.dataset.projectEdit);
  },true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',draw);else draw();
  window.PLANT_PROJECT_EDITOR={render:draw,open:openEditor};
})();
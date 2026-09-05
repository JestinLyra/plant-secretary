// Plant Secretary v132 — Projects
(() => {
  'use strict';

  const PROJECTS_KEY = 'plantSecretary.projects.v1';
  const TAGS = ['Repotting','Propagation','Pruning','Pest treatment','New pot','Plant styling','Other'];
  let draft = { plantId:'', photo:'', notes:'', tags:[] };
  let step = 1;

  const q = (sel, root=document) => root.querySelector(sel);
  const qa = (sel, root=document) => [...root.querySelectorAll(sel)];
  const esc = value => String(value ?? '').replace(/[&<>'\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]));

  function readProjects(){
    try { return JSON.parse(localStorage.getItem(PROJECTS_KEY) || '[]'); }
    catch { return []; }
  }
  function writeProjects(items){ localStorage.setItem(PROJECTS_KEY, JSON.stringify(items)); }
  function allPlants(){ return Array.isArray(window.plants) ? window.plants : (typeof plants !== 'undefined' && Array.isArray(plants) ? plants : []); }
  function plantName(p){
    try { return typeof psDisplayName === 'function' ? psDisplayName(p) : (p?.name || 'Plant'); }
    catch { return p?.name || 'Plant'; }
  }
  function plantPhoto(id){
    try {
      if (typeof psGetPlantPhoto === 'function') return psGetPlantPhoto(id) || '';
      if (typeof psGetPlantPhotos === 'function') {
        const value = psGetPlantPhotos()?.[id];
        return value && value !== '__NONE__' ? value : '';
      }
    } catch {}
    return '';
  }

  function injectProjectView(){
    if (q('#projectView')) return;
    const main = q('main');
    const section = document.createElement('section');
    section.id = 'projectView';
    section.className = 'app-view project-view';
    section.hidden = true;
    section.innerHTML = `
      <div class="project-hub-head">
        <div class="project-hub-title"><span class="project-leaf" aria-hidden="true">🌱</span><div><h2>Plant Projects</h2><p>Turn your plant ideas into reality</p></div></div>
      </div>
      <div class="project-hero" aria-hidden="true">
        <div class="project-hero-card"><strong>Ideas</strong><span>□ Propagate</span><span>□ Repot</span><span>□ Prune</span><span>□ Treat pest</span><span>□ Restyle</span></div>
        <span class="project-hero-plant">🪴</span><span class="project-hero-sprig">🌿</span>
      </div>
      <button id="newProjectBtn" class="project-primary" type="button"><span aria-hidden="true">＋</span> New Project</button>
      <div class="project-list-head"><strong>🌿 Your Projects</strong></div>
      <div id="projectList" class="project-list"></div>`;
    main.appendChild(section);
  }

  function injectProjectNav(){
    const nav = q('.bottom-nav');
    if (!nav || q('[data-view="projectView"]', nav)) return;
    const button = document.createElement('button');
    button.className = 'project-nav-btn';
    button.type = 'button';
    button.dataset.view = 'projectView';
    button.setAttribute('aria-label', 'Project');
    button.innerHTML = `<span class="nav-icon project-nav-icon" aria-hidden="true"><img class="nav-project-uploaded" alt=""></span><span>Project</span>`;
    nav.appendChild(button);
    button.addEventListener('click', () => {
      if (typeof showView === 'function') showView('projectView');
      renderProjects();
    });
  }

  function ensureWizard(){
    if (q('#projectWizard')) return;
    const wrap = document.createElement('div');
    wrap.id = 'projectWizard';
    wrap.className = 'project-wizard';
    wrap.hidden = true;
    wrap.innerHTML = `
      <div class="project-wizard-backdrop" data-project-cancel></div>
      <section class="project-wizard-sheet" role="dialog" aria-modal="true" aria-labelledby="projectWizardTitle">
        <div class="project-wizard-top"><button class="project-back" type="button" aria-label="Previous step">‹</button><h2 id="projectWizardTitle">New Project</h2><button class="project-cancel" type="button" data-project-cancel>Cancel</button></div>
        <div class="project-stepper" aria-label="Project setup progress">
          <div data-step-dot="1"><b>1</b><span>Plant</span></div><i></i><div data-step-dot="2"><b>2</b><span>Photo</span></div><i></i><div data-step-dot="3"><b>3</b><span>Details</span></div>
        </div>
        <div id="projectWizardBody"></div>
      </section>
      <input id="projectPhotoInput" type="file" accept="image/*" hidden>`;
    document.body.appendChild(wrap);
    qa('[data-project-cancel]', wrap).forEach(el => el.addEventListener('click', closeWizard));
    q('.project-back', wrap).addEventListener('click', () => { if (step > 1) { step -= 1; renderWizard(); } else closeWizard(); });
    q('#projectPhotoInput', wrap).addEventListener('change', onPhotoChosen);
  }

  function openWizard(){
    ensureWizard();
    draft = { plantId:'', photo:'', notes:'', tags:[] };
    step = 1;
    q('#projectWizard').hidden = false;
    document.body.classList.add('project-modal-open');
    renderWizard();
  }
  function closeWizard(){
    const wizard = q('#projectWizard');
    if (wizard) wizard.hidden = true;
    document.body.classList.remove('project-modal-open');
  }

  function updateStepper(){
    qa('[data-step-dot]').forEach(node => {
      const n = Number(node.dataset.stepDot);
      node.classList.toggle('active', n === step);
      node.classList.toggle('done', n < step);
      q('b', node).textContent = n < step ? '✓' : String(n);
    });
    q('.project-back').style.visibility = step > 1 ? 'visible' : 'hidden';
  }

  function renderWizard(){
    updateStepper();
    const body = q('#projectWizardBody');
    if (step === 1) {
      const rows = allPlants().slice().sort((a,b) => plantName(a).localeCompare(plantName(b))).map(p => {
        const photo = plantPhoto(p.id);
        return `<button class="project-plant-row" type="button" data-project-plant="${esc(p.id)}">${photo ? `<img src="${esc(photo)}" alt="">` : '<span class="project-plant-fallback">🌿</span>'}<span>${esc(plantName(p))}</span><b aria-hidden="true">›</b></button>`;
      }).join('');
      body.innerHTML = `<div class="project-step-copy"><h3>Which plant do you want to work on?</h3></div><label class="project-search"><span aria-hidden="true">⌕</span><input id="projectPlantSearch" type="search" placeholder="Search your plants…" autocomplete="off"></label><div id="projectPlantRows" class="project-plant-rows">${rows || '<p class="project-empty">No plants are available.</p>'}</div>`;
      qa('[data-project-plant]', body).forEach(btn => btn.addEventListener('click', () => { draft.plantId = btn.dataset.projectPlant; step = 2; renderWizard(); }));
      q('#projectPlantSearch', body)?.addEventListener('input', e => {
        const term = e.target.value.trim().toLowerCase();
        qa('[data-project-plant]', body).forEach(btn => btn.hidden = !btn.textContent.toLowerCase().includes(term));
      });
    } else if (step === 2) {
      body.innerHTML = `<div class="project-step-copy"><h3>Add photo inspiration</h3><p>Add a photo of the look, style or result you’re aiming for.</p></div><button id="projectPhotoPicker" class="project-photo-drop" type="button">${draft.photo ? `<img src="${esc(draft.photo)}" alt="Project inspiration preview"><span>Change photo</span>` : '<span class="project-photo-icon">▧<b>+</b></span><strong>Add photo</strong>'}</button><button id="projectPhotoNext" class="project-primary project-next" type="button">Next</button>`;
      q('#projectPhotoPicker', body).addEventListener('click', () => q('#projectPhotoInput').click());
      q('#projectPhotoNext', body).addEventListener('click', () => { step = 3; renderWizard(); });
    } else {
      body.innerHTML = `<div class="project-step-copy"><h3>Additional notes</h3><p>Add any details, ideas or steps you want to remember.</p></div><textarea id="projectNotes" class="project-notes" maxlength="500" placeholder="e.g. Repot into a bigger pot, use chunky mix, keep in bright indirect light…">${esc(draft.notes)}</textarea><div class="project-note-count"><span id="projectNoteCount">${draft.notes.length}</span>/500</div><div class="project-tags"><strong>Tags <small>(optional)</small></strong><div>${TAGS.map(tag => `<button type="button" data-project-tag="${esc(tag)}" class="${draft.tags.includes(tag)?'selected':''}">${esc(tag)}</button>`).join('')}</div></div><button id="projectSave" class="project-primary project-save" type="button">Save Project</button>`;
      q('#projectNotes', body).addEventListener('input', e => { draft.notes = e.target.value; q('#projectNoteCount').textContent = String(draft.notes.length); });
      qa('[data-project-tag]', body).forEach(btn => btn.addEventListener('click', () => {
        const tag = btn.dataset.projectTag;
        draft.tags = draft.tags.includes(tag) ? draft.tags.filter(x => x !== tag) : [...draft.tags, tag];
        btn.classList.toggle('selected', draft.tags.includes(tag));
      }));
      q('#projectSave', body).addEventListener('click', saveProject);
    }
  }

  async function onPhotoChosen(event){
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      draft.photo = await resizePhoto(file);
      renderWizard();
    } catch {
      alert('That photo could not be opened. Please choose another image.');
    }
  }

  function resizePhoto(file){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const max = 1000;
          const scale = Math.min(1, max / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.width * scale));
          canvas.height = Math.max(1, Math.round(img.height * scale));
          canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', .78));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function saveProject(){
    if (!draft.plantId) { step = 1; renderWizard(); return; }
    const projects = readProjects();
    projects.unshift({ id:`project-${Date.now()}-${Math.random().toString(36).slice(2,7)}`, plantId:draft.plantId, photo:draft.photo, notes:draft.notes.trim(), tags:[...draft.tags], status:'in-progress', createdAt:new Date().toISOString() });
    try { writeProjects(projects); }
    catch (err) { alert('This project could not be saved. Try a smaller inspiration photo.'); return; }
    closeWizard();
    renderProjects();
  }

  function renderProjects(){
    const list = q('#projectList');
    if (!list) return;
    const projects = readProjects();
    if (!projects.length) {
      list.innerHTML = '<div class="project-empty-card"><span>🌱</span><strong>No projects yet</strong><p>Tap “New Project” to plan a repot, propagation, prune or plant makeover.</p></div>';
      return;
    }
    list.innerHTML = projects.map(item => {
      const p = allPlants().find(x => x.id === item.plantId);
      const title = p ? plantName(p) : 'Plant project';
      const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-AU',{day:'numeric',month:'short',year:'numeric'}) : '';
      const thumb = item.photo || (p ? plantPhoto(p.id) : '');
      return `<article class="project-card" data-project-id="${esc(item.id)}">${thumb ? `<img src="${esc(thumb)}" alt="">` : '<span class="project-card-fallback">🌿</span>'}<div><strong>${esc(title)}</strong><small>Created ${esc(date)}</small>${item.tags?.length ? `<span class="project-card-tags">${item.tags.slice(0,2).map(esc).join(' · ')}</span>` : ''}</div><span class="project-status">In progress</span></article>`;
    }).join('');
  }

  function init(){
    injectProjectView();
    injectProjectNav();
    ensureWizard();
    q('#newProjectBtn')?.addEventListener('click', openWizard);
    renderProjects();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();

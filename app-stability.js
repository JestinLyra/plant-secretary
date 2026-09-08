(()=>{
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function currentPlantById(id){return plantsList().find(p=>String(p.id)===String(id))||null}
function localDate(v){const d=new Date(v);if(Number.isNaN(d.getTime()))return'';return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function today(){return localDate(new Date())}
function notify(msg){if(typeof toast==='function')toast(msg)}

document.addEventListener('click',e=>{
  const log=e.target.closest('#plantProfile [data-log]');
  if(log){const p=currentPlantById(log.dataset.id);const type=log.dataset.log;if(p&&(p.history||[]).some(h=>h.type===type&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`${type} is already recorded today for ${p.name}`);return}}
  const water=e.target.closest('[data-water]');
  if(water){const p=currentPlantById(water.dataset.water);if(p&&(p.history||[]).some(h=>h.type==='Watered'&&localDate(h.date)===today())){e.preventDefault();e.stopImmediatePropagation();notify(`Watering is already recorded today for ${p.name}`);return}}
},true);

document.addEventListener('keydown',e=>{
  const card=e.target.closest('.plant-card[data-profile]');if(!card)return;
  if(e.key!=='Enter'&&e.key!==' ')return;e.preventDefault();
  if(typeof window.openModal==='function')window.openModal(card.dataset.profile);else if(typeof openModal==='function')openModal(card.dataset.profile);
});
})();
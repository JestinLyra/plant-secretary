const plants = [
  {id:'gardenia-radicans',name:'Gardenia radicans',place:'indoor',base:5,note:'Keep evenly moist; check before the mix fully dries.'},
  {id:'mama-snake',name:'Mama Snake Plant',place:'indoor',base:18,note:'Allow potting mix to dry well between waterings.'},
  {id:'baby-snake',name:'Baby Snake Plant',place:'indoor',base:7,note:'Water propagation: keep roots submerged and refresh water regularly.'},
  {id:'peace-lily',name:'Peace Lily',place:'indoor',base:5,note:'Check when the top layer begins to dry; avoid prolonged sogginess.'},
  {id:'golden-pothos',name:'Golden Pothos / Devil’s Ivy',place:'indoor',base:8,note:'Let the top few centimetres dry before watering.'},
  {id:'marble-queen',name:'Marble Queen Pothos',place:'indoor',base:8,note:'Check topsoil dryness before watering.'},
  {id:'moon-valley',name:'Pilea ‘Moon Valley’',place:'indoor',base:5,note:'Prefers lightly moist soil, not waterlogged.'},
  {id:'many',name:'Many — Monstera deliciosa',place:'indoor',base:8,note:'Water after the upper potting mix dries.'},
  {id:'konti',name:'Konti — Monstera deliciosa',place:'indoor',base:8,note:'Water after the upper potting mix dries.'},
  {id:'birkin-green',name:'Philodendron ‘Birkin’ — green pot',place:'indoor',base:8,note:'Check upper mix; water when partly dry.'},
  {id:'birkin-white',name:'Philodendron ‘Birkin’ — white pot',place:'indoor',base:8,note:'Check upper mix; water when partly dry.'},
  {id:'zz-thick',name:'Thick — ZZ Plant',place:'indoor',base:20,note:'Drought tolerant; let mix dry thoroughly.'},
  {id:'zz-thin',name:'Thin — ZZ Plant',place:'indoor',base:20,note:'Drought tolerant; let mix dry thoroughly.'},
  {id:'maidenhair',name:'Maidenhair Fern',place:'indoor',base:3,note:'Do not allow the root zone to dry out completely.'},
  {id:'begonia',name:'Begonia maculata',place:'indoor',base:6,note:'Water when the surface begins drying; avoid saturated roots.'},
  {id:'orchid-purple',name:'Purple-flowered Orchid',place:'indoor',base:8,note:'Check bark/root moisture; do not leave standing in water.'},
  {id:'orchid-white',name:'White-flowered Orchid',place:'indoor',base:8,note:'Check bark/root moisture; do not leave standing in water.'},
  {id:'pink-lady',name:'Pink Lady',place:'indoor',base:6,note:'Check when the upper mix begins to dry; avoid prolonged sogginess.'},
  {id:'haworthia-retusa',name:'Haworthia retusa',place:'indoor',base:14,note:'Allow the mix to dry well between waterings; avoid water sitting in the rosette.'},
  {id:'string-of-pearls',name:'String of Pearls',place:'indoor',base:12,note:'Let the potting mix dry substantially between waterings; avoid constantly damp soil.'},
  {id:'bougainvillea',name:'Bougainvillea',place:'outdoor',base:6,note:'Prefer drying slightly between deep waterings.'},
  {id:'dwarf-lemon',name:'Dwarf Lemon',place:'outdoor',base:4,note:'Citrus needs consistent moisture during active growth.'},
  {id:'regular-lemon',name:'Regular Lemon',place:'outdoor',base:4,note:'Citrus needs consistent moisture during active growth.'},
  {id:'calamansi',name:'Dwarf Calamansi',place:'outdoor',base:4,note:'Keep evenly moist but well drained.'},
  {id:'rosemary',name:'Rosemary — purple flowers',place:'outdoor',base:8,note:'Allow soil to dry between watering; dislikes wet feet.'},
  {id:'mint',name:'Mint',place:'outdoor',base:3,note:'Check frequently; mint prefers consistently moist soil.'},
  {id:'parsley',name:'Parsley',place:'outdoor',base:3,note:'Keep soil consistently moist during active growth.'}
];

const KEY='plantSecretary.v2';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
state.watered=state.watered||{}; state.weather=state.weather||{temp:null,rainChance:null,rainMm:null};

const el=id=>document.getElementById(id);
function localDateOnly(d=new Date()){const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function parseDateOnly(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12,0,0,0);}
function addDays(date,n){const d=new Date(date);d.setDate(d.getDate()+n);return d;}
function dayDiff(a,b){const x=new Date(a.getFullYear(),a.getMonth(),a.getDate());const y=new Date(b.getFullYear(),b.getMonth(),b.getDate());return Math.round((x-y)/86400000);}
const sunlight={
  'gardenia-radicans':'🌤️','mama-snake':'⛅️','baby-snake':'⛅️','peace-lily':'⛅️','golden-pothos':'⛅️','marble-queen':'⛅️','moon-valley':'⛅️',
  'many':'⛅️','konti':'⛅️','birkin-green':'⛅️','birkin-white':'⛅️','zz-thick':'☁️','zz-thin':'☁️','maidenhair':'⛅️','begonia':'⛅️',
  'orchid-purple':'⛅️','orchid-white':'⛅️','pink-lady':'🌤️','haworthia-retusa':'🌤️','string-of-pearls':'🌤️','bougainvillea':'☀️',
  'dwarf-lemon':'☀️','regular-lemon':'☀️','calamansi':'☀️','rosemary':'☀️','mint':'🌤️','parsley':'🌤️'
};
function wateringClass(p){
  if(p.base<=5) return 'water-high';
  if(p.base<=9) return 'water-moderate';
  return 'water-low';
}
function renderTiles(){
  el('plantTotal').textContent=`(${plants.length})`;
  el('plantTiles').innerHTML=plants.map(p=>`<button class="plant-tile ${wateringClass(p)}" type="button" data-tile="${p.id}" aria-label="Open ${p.name}"><span class="tile-sun" aria-label="Sunlight category">${sunlight[p.id]||'⛅️'}</span><span class="tile-name">${p.name}</span></button>`).join('');
  document.querySelectorAll('[data-tile]').forEach(b=>b.addEventListener('click',()=>{
    el('filterSelect').value='all'; render();
    const card=document.querySelector(`[data-card="${b.dataset.tile}"]`);
    if(card) card.scrollIntoView({behavior:'smooth',block:'center'});
  }));
}

const today=new Date();
el('todayLabel').textContent=`Altona, Victoria · ${today.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'short',year:'numeric'})}`;

function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function daysSince(dateStr){if(!dateStr)return 999; return dayDiff(today,parseDateOnly(dateStr));}
function wateredStatusLabel(dateStr){
  if(!dateStr) return 'No watering recorded';
  const d=parseDateOnly(dateStr);
  const ago=Math.max(0,dayDiff(today,d));
  if(ago===0) return 'Watered today';
  const when=d.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'long'});
  return `${when}, ${ago} day${ago===1?'':'s'} ago`;
}
function adjustedDays(p){let days=p.base; const w=state.weather; if(p.place==='outdoor'){
  if(Number(w.rainMm)>=5 || Number(w.rainChance)>=80) days+=2;
  if(Number(w.temp)>=30 && Number(w.rainMm)<2) days=Math.max(1,days-1);
  if(Number(w.temp)>=35 && Number(w.rainMm)<2) days=Math.max(1,days-2);
 } else if(Number(w.temp)>=35){days=Math.max(2,days-1);} return days;
}
function statusFor(p){const elapsed=daysSince(state.watered[p.id]); const target=adjustedDays(p); if(elapsed>=target)return 'due'; if(elapsed>=Math.max(0,target-2))return 'soon'; return 'ok';}
function reasonFor(p){const w=state.weather; let extra=''; if(p.place==='outdoor' && Number(w.rainMm)>=5) extra=' BOM rain entered: watering check delayed.'; else if(p.place==='outdoor' && Number(w.temp)>=30 && Number(w.rainMm)<2) extra=' Hot/dry conditions entered: check sooner.'; return p.note+extra;}
function firstForecastDate(p){
  const interval=p.base;
  const last=state.watered[p.id];
  if(!last) return new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
  const due=addDays(parseDateOnly(last),interval);
  const todayNoon=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
  return due<todayNoon?todayNoon:due;
}
function renderFortnight(){
  const start=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
  const days=Array.from({length:14},(_,i)=>({date:addDays(start,i),plants:[]}));
  plants.forEach(p=>{
    const interval=Math.max(1,p.base);
    let date=firstForecastDate(p);
    while(dayDiff(date,start)<14){
      const idx=dayDiff(date,start);
      if(idx>=0) days[idx].plants.push(p);
      date=addDays(date,interval);
    }
  });
  el('fortnightGrid').innerHTML=days.map((day,i)=>{
    const dateLabel=day.date.toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short'});
    const title=i===0?'Today':dateLabel;
    const chips=day.plants.length?day.plants.map(p=>`<span class="forecast-chip ${wateringClass(p)}"><span class="forecast-sun">${sunlight[p.id]||'⛅️'}</span>${p.name}</span>`).join(''):'<span class="no-water">No watering predicted</span>';
    return `<article class="forecast-day${i===0?' forecast-today':''}"><div class="forecast-date"><strong>${title}</strong>${i===0?`<span>${dateLabel}</span>`:''}</div><div class="forecast-plants">${chips}</div></article>`;
  }).join('');
}
function render(){
  const filter=el('filterSelect').value; let due=0,soon=0,ok=0;
  plants.forEach(p=>{const s=statusFor(p); if(s==='due')due++; else if(s==='soon')soon++; else ok++;});
  el('dueCount').textContent=due; el('soonCount').textContent=soon; el('okCount').textContent=ok;
  const list=plants.filter(p=>filter==='all'||p.place===filter||(filter==='due'&&statusFor(p)==='due'));
  el('plantList').innerHTML=list.map(p=>{const s=statusFor(p); const labels={due:'Check today',soon:'Due soon',ok:'Okay for now'}; const last=state.watered[p.id]?new Date(state.watered[p.id]+'T12:00:00').toLocaleDateString('en-AU',{day:'numeric',month:'short',year:'numeric'}):'Not recorded'; const wateredLabel=wateredStatusLabel(state.watered[p.id]); return `<article class="plant-card ${wateringClass(p)}" data-card="${p.id}"><div class="plant-top"><div><div class="plant-name-row"><div class="plant-name">${p.name}</div><span class="check-sun" aria-label="Sunlight category">${sunlight[p.id]||'⛅️'}</span></div><div class="plant-meta">${p.place==='indoor'?'Indoor':'Outdoor'}</div></div><span class="badge ${s}">${labels[s]}</span></div><p class="reason">${reasonFor(p)}</p><div class="actions"><button class="watered watered-status" data-water="${p.id}" aria-label="Record ${p.name} as watered today. Current status: ${wateredLabel}">💧 ${wateredLabel}</button><button data-damp="${p.id}">Soil still damp</button></div><div class="last-watered">Last watered: ${last}</div></article>`}).join('');
  document.querySelectorAll('[data-water]').forEach(b=>b.addEventListener('click',()=>{state.watered[b.dataset.water]=localDateOnly();save();render();}));
  document.querySelectorAll('[data-damp]').forEach(b=>b.addEventListener('click',()=>{const p=plants.find(p=>p.id===b.dataset.damp);const d=addDays(new Date(),-Math.max(0,adjustedDays(p)-2));state.watered[b.dataset.damp]=localDateOnly(d);save();render();}));
  renderFortnight();
}
el('filterSelect').addEventListener('change',render); el('showAllBtn').addEventListener('click',()=>el('plantList').scrollIntoView({behavior:'smooth'})); el('refreshBtn').addEventListener('click',()=>{renderTiles();render();});
document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.scroll;if(id==='top')window.scrollTo({top:0,behavior:'smooth'});else el(id).scrollIntoView({behavior:'smooth'});}));
renderTiles();render();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=6').catch(()=>{}));}

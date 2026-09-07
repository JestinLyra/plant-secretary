(()=>{
const DETAILS={
'Begonia':{common:'Polka Dot Begonia · Spotted Begonia',habit:'Cane-forming / upright'},
'Birkin — green pot':{common:'Philodendron Birkin',habit:'Self-heading / upright'},
'Birkin — white pot':{common:'Philodendron Birkin',habit:'Self-heading / upright'},
'Burro’s Tail':{common:'Donkey’s Tail · Lamb’s Tail',habit:'Trailing succulent'},
'Coriander':{common:'Coriander · Cilantro',habit:'Upright herb'},
'Friendship Plant':{common:'Friendship Plant',habit:'Bushy / spreading'},
'Gardenia':{common:'Gardenia · Cape Jasmine',habit:'Shrubby / upright'},
'Golden Pothos':{common:'Golden Pothos · Devil’s Ivy',habit:'Climbing / trailing vine'},
'Ice Plant':{common:'Ice Plant',habit:'Trailing / spreading succulent'},
'Maidenhair Fern':{common:'Maidenhair Fern',habit:'Clumping fern'},
'Marble Queen Pothos':{common:'Marble Queen Pothos',habit:'Climbing / trailing vine'},
'Monstera — thick':{common:'Swiss Cheese Plant · Fruit Salad Plant',habit:'Climbing vine'},
'Monstera — thin':{common:'Swiss Cheese Plant · Fruit Salad Plant',habit:'Climbing vine'},
'Orchids — Purple':{common:'Moth Orchid',habit:'Upright epiphyte'},
'Orchids — White':{common:'Moth Orchid',habit:'Upright epiphyte'},
'Peace Lily':{common:'Peace Lily',habit:'Clumping / upright'},
'Pink Lady':{common:'Pink Lady · Turtle Vine',habit:'Trailing / creeping'},
'Snake Plant — Bub':{common:'Snake Plant · Mother-in-law’s Tongue',habit:'Upright / clumping'},
'Snake Plant — Mum':{common:'Snake Plant · Mother-in-law’s Tongue',habit:'Upright / clumping'},
'Variegated String of Pearls':{common:'Variegated String of Pearls',habit:'Trailing succulent'},
'Window Boat':{common:'Window Boat · Cathedral Window Haworthia',habit:'Rosette / clumping'},
'ZZ Plant — Thick':{common:'ZZ Plant · Zanzibar Gem',habit:'Upright / clumping'},
'ZZ Plant — Thin':{common:'ZZ Plant · Zanzibar Gem',habit:'Upright / clumping'},
'Bougainvillea — White':{common:'Bougainvillea',habit:'Climbing / scrambling shrub'},
'Calamansi — Dwarf':{common:'Calamansi · Calamondin',habit:'Compact citrus tree'},
'Firecracker — Chilli':{common:'Firecracker Chilli',habit:'Bushy / upright'},
'Habanero':{common:'Habanero Chilli',habit:'Bushy / upright'},
'Jalapeño':{common:'Jalapeño Chilli',habit:'Bushy / upright'},
'Lemon':{common:'Lemon',habit:'Citrus tree'},
'Lemon — Dwarf':{common:'Dwarf Lemon',habit:'Compact citrus tree'},
'Mint':{common:'Mint',habit:'Spreading herb'},
'Parsley':{common:'Parsley',habit:'Clumping herb'},
'Rosemary — purple flowers':{common:'Rosemary',habit:'Woody / upright shrub'},
'Silver Dollar Eucalyptus':{common:'Silver Dollar Gum · Argyle Apple',habit:'Upright tree'},
'Thai Peppers':{common:'Thai Chilli · Thai Pepper',habit:'Bushy / upright'},
'Timble — Chilli':{common:'Timble Chilli',habit:'Bushy / upright'}
};
function detail(p){const d=DETAILS[p.name]||{};return {common:(p.common&&p.common.trim())||d.common||'Common name not set',habit:(p.habit&&p.habit.trim())||d.habit||'Growing habit not set'};}
function installCollectionSelector(){
  const page=document.getElementById('plants');
  const collection=document.getElementById('collection');
  if(!page||!collection)return;
  page.querySelector('.searchrow')?.remove();
  document.getElementById('plantFilters')?.remove();
  document.getElementById('plantLocationSelector')?.remove();
  const wrap=document.createElement('div');
  wrap.id='plantLocationSelector';
  wrap.className='plant-location-selector';
  wrap.innerHTML=`<label class="location-select" aria-label="Filter plants by location">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    <select id="locationFilter"><option value="all">All plants</option><option value="Indoor">Indoor</option><option value="Outdoor">Outdoor</option></select>
  </label>`;
  collection.parentNode.insertBefore(wrap,collection);
  const selector=document.getElementById('locationFilter');
  selector.value=plantFilter||'all';
  selector.addEventListener('change',()=>{plantFilter=selector.value;window.renderCollection();});
}
window.renderCollection=function(){
 let list=plants.filter(p=>plantFilter==='all'||p.location===plantFilter);
 list.sort((a,b)=>a.name.localeCompare(b.name));
 const indoor=plants.filter(p=>p.location==='Indoor').length,outdoor=plants.length-indoor;
 $('#countLine').textContent=`${plants.length} plants · ${indoor} Indoor · ${outdoor} Outdoor`;
 $('#collection').innerHTML=list.map(p=>{const d=detail(p);return `<article class="plant-card" data-profile="${p.id}"><div class="photo" id="photo-${p.id}">🌿</div><div class="pcopy"><strong>${p.name}</strong><em>${d.common}</em><small>${p.location} · ${d.habit}</small></div></article>`}).join('');
 list.forEach(loadCardPhoto);
};
const st=document.createElement('style');
st.textContent=`
.pcopy{min-height:92px;display:flex;flex-direction:column}.pcopy strong{line-height:1.1}.pcopy em{min-height:30px;line-height:1.2}.pcopy small{display:block;line-height:1.2;margin-top:auto}
.plant-location-selector{display:flex;justify-content:flex-end;margin:2px 0 14px}.location-select{position:relative;display:inline-flex;align-items:center;gap:7px;background:var(--sea);border:1px solid #d2e7df;border-radius:15px;padding:8px 10px;color:var(--ink);min-width:128px}.location-select svg{width:20px;height:20px;flex:0 0 20px}.location-select select{appearance:auto;-webkit-appearance:menulist;border:0;background:transparent;padding:0 2px 0 0;border-radius:0;color:var(--ink);font:inherit;font-weight:700;min-width:88px;outline:0}
@media(max-width:430px){.plant-location-selector{margin-top:0;margin-bottom:12px}.location-select{min-width:118px;padding:7px 9px}.location-select select{font-size:13px;min-width:80px}.location-select svg{width:18px;height:18px;flex-basis:18px}}
`;
document.head.appendChild(st);
function refresh(){installCollectionSelector();if(typeof window.renderCollection==='function')window.renderCollection();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,0));else setTimeout(refresh,0);
})();
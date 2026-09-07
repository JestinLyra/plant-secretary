(()=>{
const VERSION='v1.0.1';
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
window.renderCollection=function(){
 const q=$('#plantSearch').value.toLowerCase();
 let list=plants.filter(p=>{const d=detail(p);return (plantFilter==='all'||p.location===plantFilter)&&(p.name.toLowerCase().includes(q)||(d.common||'').toLowerCase().includes(q)||(p.botanical||'').toLowerCase().includes(q));});
 list.sort((a,b)=>(sortAsc?1:-1)*a.name.localeCompare(b.name));
 const indoor=plants.filter(p=>p.location==='Indoor').length,outdoor=plants.length-indoor;
 $('#countLine').textContent=`${plants.length} plants · ${indoor} Indoor · ${outdoor} Outdoor`;
 $('#collection').innerHTML=list.map(p=>{const d=detail(p);return `<article class="plant-card" data-profile="${p.id}"><div class="photo" id="photo-${p.id}">🌿</div><div class="pcopy"><strong>${p.name}</strong><em>${d.common}</em><small>${p.location} · ${d.habit}</small></div></article>`}).join('');
 list.forEach(loadCardPhoto);
};
function applyVersion(){document.querySelectorAll('.version-label').forEach(el=>el.textContent=VERSION);document.querySelectorAll('.more-card small').forEach(el=>{if(el.textContent.includes('Version '))el.textContent=el.textContent.replace(/Version\s+[\d.]+/,'Version 1.0.1')});}
function refresh(){applyVersion();if(typeof window.renderCollection==='function')window.renderCollection();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,0));else setTimeout(refresh,0);
})();
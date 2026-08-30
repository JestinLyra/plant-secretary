const plants = [
  {id:'gardenia-radicans',name:'Gardenia radicans',place:'indoor',base:5,note:'Keep evenly moist; check before the mix fully dries.'},
  {id:'mama-snake',name:'Mama Snake Plant — potting soil',place:'indoor',base:18,note:'Allow potting mix to dry well between waterings.'},
  {id:'baby-snake',name:'Baby Snake Plant — propagated in water',place:'indoor',base:7,note:'Keep roots submerged and refresh the propagation water regularly.'},
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
  {id:'bougainvillea',name:'Bougainvillea',place:'outdoor',base:6,note:'Prefer drying slightly between deep waterings.'},
  {id:'dwarf-lemon',name:'Dwarf Lemon',place:'outdoor',base:4,note:'Citrus needs consistent moisture during active growth.'},
  {id:'regular-lemon',name:'Regular Lemon',place:'outdoor',base:4,note:'Citrus needs consistent moisture during active growth.'},
  {id:'calamansi',name:'Dwarf Calamansi',place:'outdoor',base:4,note:'Keep evenly moist but well drained.'},
  {id:'rosemary',name:'Rosemary — purple flowers',place:'outdoor',base:8,note:'Allow soil to dry between watering; dislikes wet feet.'},
  {id:'mint',name:'Mint',place:'outdoor',base:3,note:'Check frequently; mint prefers consistently moist soil.'},
  {id:'parsley',name:'Parsley',place:'outdoor',base:3,note:'Keep soil consistently moist during active growth.'},
  {id:'thai-peppers',name:'Thai Peppers',place:'outdoor',base:3,note:'Keep evenly moist during active growth; avoid waterlogging.'},
  {id:'chilli-timble',name:'Chilli ‘Timble’',place:'outdoor',base:3,note:'Water when the upper soil starts to dry; keep moisture reasonably consistent.'},
  {id:'chilli-firecracker',name:'Chilli ‘Firecracker’',place:'outdoor',base:3,note:'Water when the upper soil starts to dry; keep moisture reasonably consistent.'},
  {id:'habanero',name:'Habanero',place:'outdoor',base:3,note:'Keep evenly moist during flowering and fruiting; avoid soggy soil.'},
  {id:'jalapeno',name:'Jalapeño',place:'outdoor',base:3,note:'Keep evenly moist during flowering and fruiting; avoid soggy soil.'}
];

const sunlight={
  'gardenia-radicans':'🌤️','mama-snake':'⛅️','baby-snake':'⛅️','peace-lily':'⛅️','golden-pothos':'⛅️','marble-queen':'⛅️','moon-valley':'⛅️',
  'many':'⛅️','konti':'⛅️','birkin-green':'⛅️','birkin-white':'⛅️','zz-thick':'☁️','zz-thin':'☁️','maidenhair':'⛅️','begonia':'⛅️',
  'orchid-purple':'⛅️','orchid-white':'⛅️','bougainvillea':'☀️','dwarf-lemon':'☀️','regular-lemon':'☀️','calamansi':'☀️','rosemary':'☀️',
  'mint':'🌤️','parsley':'🌤️','thai-peppers':'☀️','chilli-timble':'☀️','chilli-firecracker':'☀️','habanero':'☀️','jalapeno':'☀️'
};

const commonProfiles={
  pothos:{tag:'Easy • trailing • forgiving',light:'Bright indirect light is best. Avoid harsh direct sun.',water:'Water when the top 2–3 cm of mix is dry.',soil:'Well-draining indoor potting mix with added perlite.',temp:'18–30°C; protect from cold drafts.',humidity:'Average indoor humidity is usually suitable.',fertiliser:'Balanced liquid feed monthly in spring and summer.',pruning:'Trim long vines above a node to encourage fuller growth.',propagation:['Cut below a node with at least one healthy leaf.','Place the node in water or moist propagation mix.','Pot up once roots are well developed.'],tips:['Wipe leaves occasionally.','Yellow leaves often suggest excess moisture.','Rotate for even growth.']},
  monstera:{tag:'Bold • climbing • tropical',light:'Bright indirect light; gentle morning sun is usually tolerated.',water:'Water after the upper few centimetres of mix dry.',soil:'Chunky, airy potting mix with bark and perlite.',temp:'18–30°C; avoid cold drafts.',humidity:'Moderate humidity; higher humidity can support lush growth.',fertiliser:'Feed monthly during active spring–summer growth.',pruning:'Remove damaged leaves and guide aerial growth onto support.',propagation:['Take a cutting with a node.','Root in water or a moist airy medium.','Pot once several roots are established.'],tips:['Give climbing support as it matures.','Do not keep the mix constantly wet.','Clean broad leaves to improve light capture.']},
  succulent:{tag:'Dry-loving • compact • resilient',light:'Bright light; acclimatise gradually to stronger direct sun.',water:'Water thoroughly, then let the mix dry well before watering again.',soil:'Very free-draining succulent mix.',temp:'Generally comfortable in normal indoor temperatures.',humidity:'Prefers drier air and good airflow.',fertiliser:'Light feeding only during active growth.',pruning:'Remove dead or damaged growth with clean tools.',propagation:['Take a healthy offset or cutting if the species allows.','Allow cut surfaces to dry before placing in mix.','Water sparingly until established.'],tips:['Avoid waterlogged soil.','Use a pot with drainage.','More light usually means sturdier growth.']},
  citrus:{tag:'Sunny • productive • thirsty in growth',light:'Direct sun is best; aim for a bright outdoor position.',water:'Water deeply when the upper soil begins to dry; do not let roots stay soggy.',soil:'Free-draining, fertile potting mix suited to citrus.',temp:'Best outdoors in Melbourne conditions with protection from severe frost.',humidity:'Normal outdoor humidity is suitable.',fertiliser:'Use a citrus fertiliser according to the label during active growth.',pruning:'Remove dead, crossing or congested growth; avoid excessive pruning.',propagation:['Seed is possible but may not come true to type.','Named citrus is commonly grafted or budded.','For reliable fruit quality, maintain the existing grafted plant.'],tips:['Full sun supports flowering and fruiting.','Do not let pots dry out completely in hot weather.','Watch for citrus pests and follow registered label directions.']}
};

function profileFor(p){
  const base={
    intro:`${p.name} is part of your Plant Secretary collection. Use soil moisture and plant response as the final check before watering.`,
    light:'Bright filtered light is generally suitable.',water:p.note,soil:'Use a well-draining mix suited to the plant type.',temp:'Protect from temperature extremes.',humidity:'Normal household or outdoor humidity is usually suitable.',fertiliser:'Feed only during active growth and follow the product label.',pruning:'Remove damaged growth with clean tools.',toxicity:'Non-toxic',propagation:['Use a healthy section of the plant.','Root using the method suited to the species.','Pot up once new roots or growth are established.'],tips:['Check moisture before watering.','Use a pot with drainage where appropriate.','Watch new growth for signs of stress.'],tag:'Care guide'};

  if(['golden-pothos','marble-queen'].includes(p.id)) Object.assign(base,commonProfiles.pothos,{toxicity:'Toxic — Humans, Dogs & Cats'});
  if(['many','konti'].includes(p.id)) Object.assign(base,commonProfiles.monstera,{toxicity:'Toxic — Humans, Dogs & Cats'});
  if(['haworthia-retusa','string-of-pearls'].includes(p.id)) Object.assign(base,commonProfiles.succulent,{toxicity:p.id==='string-of-pearls'?'Toxic — Humans, Dogs & Cats':'Non-toxic'});
  if(['dwarf-lemon','regular-lemon','calamansi'].includes(p.id)) Object.assign(base,commonProfiles.citrus,{toxicity:'Toxic — Dogs & Cats'});

  const overrides={
    'gardenia-radicans':{tag:'Fragrant • acid-loving • moisture-sensitive',light:'Bright light with gentle direct sun; protect from harsh afternoon sun.',water:'Keep evenly moist but never waterlogged.',soil:'Acidic, organic, free-draining mix.',temp:'Mild temperatures; protect from cold and hot drying winds.',humidity:'Moderate humidity is helpful.',fertiliser:'Use an acid-loving plant fertiliser according to label directions.',pruning:'Shape lightly after flowering and remove dead growth.',toxicity:'Non-toxic',propagation:['Take a healthy semi-ripe cutting.','Root in a humid, free-draining propagation mix.','Pot on once roots are established.'],tips:['Avoid alkaline conditions.','Consistent moisture helps prevent bud drop.','Yellowing may indicate root or nutrient stress.']},
    'mama-snake':{tag:'Tough • upright • drought-tolerant',light:'Indirect light is ideal; tolerates lower light.',water:'Allow the potting mix to dry well between waterings.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures; protect from cold.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide offsets, or cut a healthy leaf section.','Allow cut surfaces to dry briefly.','Root in free-draining mix.'],tips:['Overwatering is the main risk.','Do not leave standing in water.','Lower light means slower drying.']},
    'baby-snake':{tag:'Water propagation • young • developing',light:'Bright indirect light.',water:'Keep established roots in clean water; refresh regularly.',soil:'Not in soil yet — currently a water propagation.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'No routine fertiliser while newly rooting in water.',pruning:'Remove only damaged tissue.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Keep the rooted section upright in clean water.','Refresh water regularly.','Move to a free-draining mix once roots are robust.'],tips:['Keep leaves above the water line.','Watch for soft or rotting tissue.','Transition gradually when potting into soil.']},
    'peace-lily':{tag:'Lush • shade-tolerant • moisture-loving',light:'Bright indirect light; avoid harsh direct sun.',water:'Water when the upper layer begins to dry.',soil:'Moisture-retentive but free-draining indoor mix.',temp:'Warm indoor temperatures; avoid cold drafts.',humidity:'Moderate to higher humidity is helpful.',fertiliser:'Feed lightly in active growth.',pruning:'Cut spent flowers and yellow leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide a mature clump during repotting.','Keep several roots and leaves on each division.','Replant into moist, free-draining mix.'],tips:['Drooping can indicate thirst but check soil first.','Avoid constantly saturated soil.','Wipe broad leaves clean.']},
    'moon-valley':{tag:'Textured • compact • humidity-loving',light:'Bright indirect light; avoid strong direct sun.',water:'Keep lightly moist, allowing the surface to begin drying.',soil:'Light, organic and free-draining mix.',temp:'Warm indoor temperatures.',humidity:'Moderate to higher humidity.',fertiliser:'Feed lightly during spring and summer.',pruning:'Pinch tips to encourage bushier growth.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist propagation mix.','Pot once roots are established.'],tips:['Avoid letting it dry completely.','Keep away from hot direct sun.','Pinching helps maintain a compact shape.']},
    'birkin-green':{tag:'Striped • compact • tropical',light:'Bright indirect light.',water:'Water when the upper mix is partly dry.',soil:'Airy indoor aroid mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity.',fertiliser:'Feed monthly in active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Propagate by division or stem cutting when a node is available.','Root in water or airy mix.','Pot once roots establish.'],tips:['Variegation may vary between leaves.','Avoid saturated soil.','Rotate for even growth.']},
    'birkin-white':{tag:'Striped • compact • tropical',light:'Bright indirect light.',water:'Water when the upper mix is partly dry.',soil:'Airy indoor aroid mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity.',fertiliser:'Feed monthly in active growth.',pruning:'Remove damaged leaves at the base.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Propagate by division or stem cutting when a node is available.','Root in water or airy mix.','Pot once roots establish.'],tips:['Variegation may vary between leaves.','Avoid saturated soil.','Rotate for even growth.']},
    'zz-thick':{tag:'Tough • glossy • drought-tolerant',light:'Indirect light; tolerates lower light.',water:'Let the mix dry thoroughly before watering again.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove yellow or damaged stems at soil level.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide rhizomes during repotting or use leaf/stem cuttings.','Root patiently in a free-draining medium.','Avoid keeping propagation material wet.'],tips:['Overwatering is the main risk.','Rhizomes store water.','Lower light means even less frequent watering.']},
    'zz-thin':{tag:'Tough • glossy • drought-tolerant',light:'Indirect light; tolerates lower light.',water:'Let the mix dry thoroughly before watering again.',soil:'Very free-draining indoor mix.',temp:'Normal indoor temperatures.',humidity:'Average indoor humidity.',fertiliser:'Feed lightly during active growth.',pruning:'Remove yellow or damaged stems at soil level.',toxicity:'Toxic — Humans, Dogs & Cats',propagation:['Divide rhizomes during repotting or use leaf/stem cuttings.','Root patiently in a free-draining medium.','Avoid keeping propagation material wet.'],tips:['Overwatering is the main risk.','Rhizomes store water.','Lower light means even less frequent watering.']},
    'maidenhair':{tag:'Delicate • airy • moisture-loving',light:'Bright indirect light; protect from direct sun.',water:'Keep the root zone consistently moist; do not let it fully dry.',soil:'Moisture-retentive, organic but free-draining mix.',temp:'Cool to mild indoor temperatures.',humidity:'Prefers higher humidity.',fertiliser:'Feed lightly in active growth.',pruning:'Trim brown fronds at the base.',toxicity:'Non-toxic',propagation:['Divide a healthy established clump.','Keep roots moist during division.','Replant promptly into moist mix.'],tips:['Drying out can quickly damage fronds.','Avoid hot air from heaters.','Consistent humidity helps.']},
    'begonia':{tag:'Spotted • decorative • humidity-friendly',light:'Bright indirect light; gentle morning sun may be tolerated.',water:'Water when the surface begins to dry.',soil:'Airy, free-draining mix.',temp:'Warm indoor temperatures.',humidity:'Moderate humidity with airflow.',fertiliser:'Feed lightly during active growth.',pruning:'Pinch or trim leggy stems to encourage branching.',toxicity:'Toxic — Dogs & Cats',propagation:['Take a healthy stem cutting with a node.','Root in water or moist propagation mix.','Pot once roots are established.'],tips:['Avoid wet leaves staying stagnant.','Do not keep roots waterlogged.','Bright indirect light supports leaf pattern.']},
    'orchid-purple':{tag:'Elegant • epiphytic • airy-rooted',light:'Bright indirect light; protect from harsh direct sun.',water:'Water when roots/bark approach dryness; drain completely.',soil:'Orchid bark or another airy orchid medium.',temp:'Typical indoor temperatures suit Phalaenopsis-type orchids.',humidity:'Moderate humidity with airflow.',fertiliser:'Use an orchid fertiliser according to label directions.',pruning:'Remove dead roots and spent flower spikes as appropriate.',toxicity:'Non-toxic',propagation:['Home propagation is usually by keiki/offshoot where produced.','Allow a keiki to develop roots before separation.','Pot into fresh orchid bark.'],tips:['Green roots usually indicate moisture.','Never leave the crown full of water.','Good airflow reduces rot risk.']},
    'orchid-white':{tag:'Elegant • epiphytic • airy-rooted',light:'Bright indirect light; protect from harsh direct sun.',water:'Water when roots/bark approach dryness; drain completely.',soil:'Orchid bark or another airy orchid medium.',temp:'Typical indoor temperatures suit Phalaenopsis-type orchids.',humidity:'Moderate humidity with airflow.',fertiliser:'Use an orchid fertiliser according to label directions.',pruning:'Remove dead roots and spent flower spikes as appropriate.',toxicity:'Non-toxic',propagation:['Home propagation is usually by keiki/offshoot where produced.','Allow a keiki to develop roots before separation.','Pot into fresh orchid bark.'],tips:['Green roots usually indicate moisture.','Never leave the crown full of water.','Good airflow reduces rot risk.']},
    'pink-lady':{tag:'Trailing • pink-variegated • compact',light:'Bright light with some gentle direct sun to support colour.',water:'Allow the upper mix to begin drying before watering.',soil:'Light, free-draining potting mix.',temp:'Warm indoor temperatures.',humidity:'Average to moderate humidity.',fertiliser:'Feed lightly in active growth.',pruning:'Pinch stems to encourage a fuller plant.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist mix.','Pinch new growth after establishment.'],tips:['More light can improve pink colour.','Avoid prolonged sogginess.','Pinch regularly for a dense habit.']},
    'bougainvillea':{tag:'Sun-loving • flowering • vigorous',light:'Direct sun is essential for best flowering.',water:'Water deeply, then allow some drying between waterings.',soil:'Very free-draining outdoor potting mix.',temp:'Warm sunny conditions; protect from severe frost.',humidity:'Normal outdoor humidity.',fertiliser:'Feed for flowering according to label directions.',pruning:'Prune after flowering flushes and train long shoots.',toxicity:'Non-toxic',propagation:['Take a semi-hardwood cutting.','Root in a free-draining propagation medium.','Keep warm and bright while roots form.'],tips:['Too much water can reduce flowering.','Full sun drives blooms.','Wear gloves around thorns.']},
    'rosemary':{tag:'Aromatic • Mediterranean • sun-loving',light:'Direct sun is best.',water:'Allow soil to dry between waterings.',soil:'Very free-draining mix.',temp:'Handles a broad outdoor temperature range once established.',humidity:'Prefers good airflow and drier conditions.',fertiliser:'Light feeding only; avoid excessive nitrogen.',pruning:'Trim lightly to maintain shape; avoid cutting hard into old bare wood.',toxicity:'Non-toxic',propagation:['Take a non-flowering stem cutting.','Strip lower leaves and place in propagation mix.','Pot once rooted.'],tips:['Wet feet are a major risk.','Full sun keeps growth dense.','Good airflow helps prevent disease.']},
    'mint':{tag:'Fresh • vigorous • moisture-loving',light:'Direct to indirect light; some sun supports strong growth.',water:'Keep soil consistently moist, especially in pots.',soil:'Rich, moisture-retentive but free-draining mix.',temp:'Performs well outdoors in mild conditions.',humidity:'Normal outdoor humidity.',fertiliser:'Feed lightly during active leafy growth.',pruning:'Harvest or pinch often to keep it bushy.',toxicity:'Non-toxic',propagation:['Take a healthy stem cutting.','Root in water or moist soil.','Plant out once roots are established.'],tips:['Pots help control spreading.','Do not let containers dry completely.','Frequent harvesting encourages fresh growth.']},
    'parsley':{tag:'Edible • leafy • cool-season friendly',light:'Direct to indirect sun; protect from extreme heat.',water:'Keep soil consistently moist but not saturated.',soil:'Fertile, free-draining potting mix.',temp:'Prefers mild growing conditions.',humidity:'Normal outdoor humidity.',fertiliser:'Use a suitable edible-plant fertiliser according to label.',pruning:'Harvest outer stems from the base.',toxicity:'Non-toxic',propagation:['Grow from seed.','Keep seedbed evenly moist during germination.','Thin seedlings for airflow and space.'],tips:['Harvest outer stems first.','Consistent moisture supports tender leaves.','Replace when plants become old or bolt.']}
  };
  if(overrides[p.id]) Object.assign(base,overrides[p.id]);
  base.intro=`${p.name} — ${base.tag.toLowerCase()}.`;
  return base;
}

const KEY='plantSecretary.v2';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
state.watered=state.watered||{};
const el=id=>document.getElementById(id);
function localDateOnly(d=new Date()){const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function parseDateOnly(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d,12,0,0,0);}
function addDays(date,n){const d=new Date(date);d.setDate(d.getDate()+n);return d;}
function dayDiff(a,b){const x=new Date(a.getFullYear(),a.getMonth(),a.getDate());const y=new Date(b.getFullYear(),b.getMonth(),b.getDate());return Math.round((x-y)/86400000);}
function wateringClass(p){if(p.base<=5)return 'water-high';if(p.base<=9)return 'water-moderate';return 'water-low';}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
const today=new Date();
el('todayLabel').textContent=`Altona, Victoria · ${today.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'short',year:'numeric'})}`;
function daysSince(dateStr){if(!dateStr)return 999;return dayDiff(today,parseDateOnly(dateStr));}
function wateredStatusLabel(dateStr){if(!dateStr)return 'No watering recorded';const d=parseDateOnly(dateStr);const ago=Math.max(0,dayDiff(today,d));if(ago===0)return 'Watered today';const when=d.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'long'});return `${when}, ${ago} day${ago===1?'':'s'} ago`;}
function targetDays(p){return p.base;}
function statusFor(p){const elapsed=daysSince(state.watered[p.id]);const target=targetDays(p);if(elapsed>=target)return 'due';if(elapsed>=Math.max(0,target-2))return 'soon';return 'ok';}
function shortDue(p){const s=statusFor(p);if(s==='due')return 'Check today';const last=state.watered[p.id];if(!last)return 'Check today';const due=addDays(parseDateOnly(last),targetDays(p));const n=Math.max(0,dayDiff(due,today));return n===1?'In 1 day':`In ${n} days`;}

const plantImages={
  'gardenia-radicans':'assets/plants/gardenia-radicans.jpg',
  'mama-snake':'assets/plants/mama-snake.jpg','baby-snake':'assets/plants/baby-snake.jpg',
  'peace-lily':'assets/plants/peace-lily.jpg','golden-pothos':'assets/plants/golden-pothos.jpg',
  'marble-queen':'assets/plants/marble-queen.jpg','moon-valley':'assets/plants/moon-valley.jpg',
  'many':'assets/plants/many.jpg','konti':'assets/plants/konti.jpg',
  'birkin-green':'assets/plants/birkin-green.jpg','birkin-white':'assets/plants/birkin-white.jpg',
  'zz-thick':'assets/plants/zz-thick.jpg','zz-thin':'assets/plants/zz-thin.jpg',
  'maidenhair':'assets/plants/maidenhair.jpg','begonia':'assets/plants/begonia.jpg',
  'orchid-purple':'assets/plants/orchid-purple.jpg','orchid-white':'assets/plants/orchid-white.jpg',
  'bougainvillea':'assets/plants/bougainvillea.jpg','dwarf-lemon':'assets/plants/dwarf-lemon.svg',
  'regular-lemon':'assets/plants/regular-lemon.svg','calamansi':'assets/plants/calamansi.svg',
  'rosemary':'assets/plants/rosemary.jpg','mint':'assets/plants/mint.jpg','parsley':'assets/plants/parsley.jpg',
  'thai-peppers':'assets/plants/thai-peppers.svg','chilli-timble':'assets/plants/chilli-timble.svg',
  'chilli-firecracker':'assets/plants/chilli-firecracker.svg','habanero':'assets/plants/habanero.svg','jalapeno':'assets/plants/jalapeno.svg'
};
function renderCollection(){
  el('plantTotal').textContent=plants.length;
  el('plantCollection').innerHTML=plants.map(p=>`<button class="collection-item" type="button" data-profile="${p.id}" aria-label="Open ${p.name} profile">
    <span class="collection-photo-wrap"><img class="collection-photo" src="${plantImages[p.id]}" alt="" loading="lazy"></span>
    <span class="collection-name">${p.name}</span>
  </button>`).join('');
  document.querySelectorAll('#plantCollection [data-profile]').forEach(btn=>btn.addEventListener('click',()=>openProfile(btn.dataset.profile)));
}

function renderWateringCubes(){
  const filter=el('filterSelect').value;
  const list=plants.filter(p=>filter==='all'||p.place===filter||(filter==='due'&&statusFor(p)==='due'));
  el('wateringCubes').innerHTML=list.map(p=>`<article class="water-cube ${wateringClass(p)} ${statusFor(p)}">
    <div class="cube-top"><span class="cube-sun">${sunlight[p.id]||'⛅️'}</span><span class="cube-status">${shortDue(p)}</span></div>
    <strong class="cube-name">${p.name}</strong>
    <button class="cube-water" type="button" data-water="${p.id}" aria-label="Record ${p.name} watered today">💧</button>
  </article>`).join('');
  document.querySelectorAll('[data-water]').forEach(btn=>btn.addEventListener('click',()=>{state.watered[btn.dataset.water]=localDateOnly();save();renderAll();if(currentProfile===btn.dataset.water)renderProfile(currentProfile);}));
}

function firstForecastDate(p){const last=state.watered[p.id];if(!last)return new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);const due=addDays(parseDateOnly(last),p.base);const t=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);return due<t?t:due;}
function renderFortnight(){
  const start=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12);
  const days=Array.from({length:14},(_,i)=>({date:addDays(start,i),plants:[]}));
  plants.forEach(p=>{let date=firstForecastDate(p);while(dayDiff(date,start)<14){const idx=dayDiff(date,start);if(idx>=0)days[idx].plants.push(p);date=addDays(date,Math.max(1,p.base));}});
  el('fortnightGrid').innerHTML=days.map((day,i)=>{const dateLabel=day.date.toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short'});const chips=day.plants.length?day.plants.map(p=>`<span class="forecast-chip ${wateringClass(p)}"><span>${sunlight[p.id]||'⛅️'}</span>${p.name}</span>`).join(''):'<span class="no-water">No watering predicted</span>';return `<article class="forecast-day${i===0?' forecast-today':''}"><div class="forecast-date"><strong>${i===0?'Today':dateLabel}</strong>${i===0?`<span>${dateLabel}</span>`:''}</div><div class="forecast-plants">${chips}</div></article>`;}).join('');
}

function renderAll(){renderCollection();renderWateringCubes();renderFortnight();}

let currentProfile=null;
function careCard(icon,title,text){return `<article class="care-mini"><span class="care-icon">${icon}</span><div><span class="care-label">${title}</span><p>${text}</p></div></article>`;}
function renderProfile(id){
  const p=plants.find(x=>x.id===id);if(!p)return;
  const q=profileFor(p);const watered=wateredStatusLabel(state.watered[p.id]);
  el('profileContent').innerHTML=`
    <article class="profile-hero ${wateringClass(p)}">
      <span class="profile-eyebrow">CARE GUIDE</span>
      <h2 id="profileName">${p.name}</h2>
      <span class="profile-tag">${q.tag}</span>
      <div class="hero-botanical" aria-hidden="true"><span class="leaf leaf-a"></span><span class="leaf leaf-b"></span><span class="leaf leaf-c"></span><span class="leaf leaf-d"></span><span class="stem"></span></div>
      <p>${q.intro}</p>
    </article>
    <section class="profile-core">
      ${careCard('◉','LIGHT',q.light)}
      ${careCard('💧','WATER',q.water)}
      ${careCard('♧','SOIL',q.soil)}
    </section>
    <section class="profile-grid">
      ${careCard('🌡️','TEMPERATURE',q.temp)}
      ${careCard('◯','HUMIDITY',q.humidity)}
      ${careCard('▣','FERTILISER',q.fertiliser)}
      ${careCard('✂︎','PRUNING',q.pruning)}
      ${careCard('🐶','TOXICITY',q.toxicity)}
    </section>
    <section class="profile-lower">
      <article class="profile-panel"><span class="care-label">PROPAGATE & GROW MORE</span><ol>${q.propagation.map(x=>`<li>${x}</li>`).join('')}</ol></article>
      <article class="profile-panel"><span class="care-label">QUICK TIPS</span><ul>${q.tips.map(x=>`<li>${x}</li>`).join('')}</ul></article>
    </section>
    <button id="profileWaterBtn" class="profile-water-btn" type="button">💧 ${watered}</button>
  `;
  el('profileWaterBtn').addEventListener('click',()=>{state.watered[p.id]=localDateOnly();save();renderAll();renderProfile(p.id);});
}
function openProfile(id){currentProfile=id;renderProfile(id);el('profileScreen').classList.add('open');el('profileScreen').setAttribute('aria-hidden','false');document.body.classList.add('profile-open');}
function closeProfile(){el('profileScreen').classList.remove('open');el('profileScreen').setAttribute('aria-hidden','true');document.body.classList.remove('profile-open');currentProfile=null;}
el('profileBack').addEventListener('click',closeProfile);
el('filterSelect').addEventListener('change',renderWateringCubes);

if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=9').catch(()=>{}));}

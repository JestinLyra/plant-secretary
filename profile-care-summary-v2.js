(()=>{
const $=s=>document.querySelector(s);
const TILE_ORDER=['water','light','prune','ph','feed','soil'];
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function byBotanical(botanical){return window.PLANT_BOTANICAL_CARE?.get(botanical)||null}
function careIssue(botanical){return window.PLANT_BOTANICAL_CARE?.identificationIssue(botanical)||'Species-specific care is not yet available for this botanical identity.'}
function currentPlant(){const name=$('#modalTitle')?.textContent?.trim();return plantsList().find(p=>p.name===name)||null}
function markTiles(q){const cards=[...q.children];if(cards.length<6)return null;const original=['water','light','soil','ph','feed','prune'];cards.forEach((card,i)=>{if(!card.dataset.profileTile)card.dataset.profileTile=original[i]});return cards}
function removeEmoji(card){card.innerHTML=card.innerHTML.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF\uFE0F]/gu,'');const b=card.querySelector('b');if(b&&!b.querySelector('.profile-tile-icon-slot'))b.insertAdjacentHTML('afterbegin',`<span class="profile-tile-icon-slot" data-icon="${card.dataset.profileTile||''}" aria-hidden="true"></span>`)}
function apply(p){
 const modal=$('#plantModal');if(!modal||!p)return;const q=modal.querySelector('.quick');if(!q)return;const cards=markTiles(q);if(!cards)return;
 const map=Object.fromEntries(cards.map(c=>[c.dataset.profileTile,c]));const care=byBotanical(p.botanical);const issue=careIssue(p.botanical);
 const val=(v,fallback)=>v||fallback;
 const unavailable=`Identification required · ${issue}`;
 map.water.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="water" aria-hidden="true"></span>Water</b><span>${care?val(care.water,'Not established in selected sources'):unavailable}</span>`;
 map.light.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="light" aria-hidden="true"></span>Sunlight</b><span>${care?val(care.sunlight,'Not established in selected sources'):unavailable}</span>`;
 map.ph.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="ph" aria-hidden="true"></span>pH</b><span>${care?val(care.ph,'Not established in selected sources'):unavailable}</span>`;
 map.soil.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="soil" aria-hidden="true"></span>Soil</b><span>${care?care.soil[0]:unavailable}</span><small>${care?(care.soil[1]||''):''}</small>`;
 map.feed.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="feed" aria-hidden="true"></span>Feed</b><span>${care?care.feed[0]:unavailable}</span><small>${care?(care.feed[1]||''):''}</small>`;
 map.prune.innerHTML=`<b><span class="profile-tile-icon-slot" data-icon="prune" aria-hidden="true"></span>Prune / Pinch</b><span>${care?val(care.prune,'Not established in selected sources'):unavailable}</span>`;
 Object.values(map).forEach(removeEmoji);TILE_ORDER.forEach(key=>{if(map[key])q.appendChild(map[key])});
 ['soil','feed','prune'].forEach(key=>{const card=map[key];card.style.cursor='default';card.style.pointerEvents='none';card.removeAttribute('role');card.removeAttribute('tabindex');card.removeAttribute('onclick')});
}
window.PLANT_PROFILE_CARE={get:byBotanical,apply};
const originalOpen=window.openModal;if(typeof originalOpen==='function'){window.openModal=function(id){originalOpen(id);const p=plantsList().find(x=>x.id===id)||currentPlant();if(p)apply(p)}}
const style=document.createElement('style');style.textContent='#plantModal .quick div{line-height:1.2;min-height:92px}#plantModal .quick div b,#plantModal .quick div span,#plantModal .quick div small{display:block}#plantModal .quick div small{margin-top:5px;color:#68758f;font-size:10.5px;line-height:1.2;overflow-wrap:anywhere}.profile-tile-icon-slot:empty{display:none}.profile-tile-icon-slot:not(:empty){display:inline-flex;width:22px;height:22px;vertical-align:middle;margin-right:6px}.profile-tile-icon-slot img{width:100%;height:100%;object-fit:contain}';document.head.appendChild(style);
new MutationObserver(()=>{const p=currentPlant();if(p&&$('#plantModal')?.classList.contains('open'))requestAnimationFrame(()=>apply(p))}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
})();
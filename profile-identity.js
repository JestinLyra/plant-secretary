(()=>{
function plantsList(){try{return typeof plants!=='undefined'?plants:(window.plants||[])}catch(_){return window.plants||[]}}
function text(value,fallback='—'){const s=String(value??'').trim();return s||fallback}
function addField(host,label,value,italic=false){
  const item=document.createElement('div');item.className='profile-id-field';
  const l=document.createElement('span');l.className='profile-id-label';l.textContent=label;
  const v=document.createElement(italic?'em':'span');v.className='profile-id-value';v.textContent=text(value);
  item.append(l,v);host.appendChild(item);
}
function decorate(id){
  const p=plantsList().find(x=>String(x.id)===String(id));
  const profile=document.getElementById('plantProfile');
  const hero=document.getElementById(`hero-${id}`);
  if(!p||!profile||!hero)return;
  profile.querySelector('.profile-identity-row')?.remove();
  const detail=typeof window.PLANT_DISPLAY_DETAIL==='function'?window.PLANT_DISPLAY_DETAIL(p):{common:p.common||'',habit:p.habit||''};
  const row=document.createElement('section');row.className='profile-identity-row';row.setAttribute('aria-label','Plant identity');
  hero.parentNode.insertBefore(row,hero);row.appendChild(hero);
  const info=document.createElement('div');info.className='profile-identity-info';
  const name=document.createElement('h2');name.className='profile-identity-name';name.textContent=p.name;info.appendChild(name);
  addField(info,'Other (common) names',detail?.common||p.common||'');
  addField(info,'Botanical name',p.botanical||'',true);
  addField(info,'Growing habit',detail?.habit||p.habit||'');
  row.appendChild(info);
  const actions=row.nextElementSibling;
  const legacyName=actions?.nextElementSibling;
  const legacyMeta=legacyName?.nextElementSibling;
  if(legacyName?.tagName==='H2')legacyName.classList.add('profile-identity-legacy-hidden');
  if(legacyMeta?.classList?.contains('hint'))legacyMeta.classList.add('profile-identity-legacy-hidden');
}
const style=document.createElement('style');style.textContent=`
#plantProfile .profile-identity-row{display:grid;grid-template-columns:120px minmax(0,1fr);gap:14px;align-items:start;margin:4px 0 12px;min-width:0}
#plantProfile .profile-identity-row .hero-photo{width:120px!important;height:120px!important;aspect-ratio:1/1!important;border-radius:16px!important;flex:0 0 120px!important;font-size:48px!important}
#plantProfile .profile-identity-info{min-width:0;padding-top:1px}
#plantProfile .profile-identity-name{font-family:Georgia,serif;font-size:23px;line-height:1.05;margin:0 0 9px;color:var(--ink);overflow-wrap:anywhere}
#plantProfile .profile-id-field{margin-top:7px;min-width:0}
#plantProfile .profile-id-label{display:block;font-size:10.5px;font-weight:750;line-height:1.15;letter-spacing:.02em;color:#6d7c76}
#plantProfile .profile-id-value{display:block;margin-top:2px;font-size:13px;line-height:1.22;color:var(--ink);overflow-wrap:anywhere}
#plantProfile em.profile-id-value{font-family:Georgia,serif}
#plantProfile .profile-identity-legacy-hidden{display:none!important}
@media(max-width:350px){#plantProfile .profile-identity-row{grid-template-columns:104px minmax(0,1fr);gap:10px}#plantProfile .profile-identity-row .hero-photo{width:104px!important;height:104px!important;flex-basis:104px!important;border-radius:14px!important}#plantProfile .profile-identity-name{font-size:20px;margin-bottom:6px}#plantProfile .profile-id-field{margin-top:5px}#plantProfile .profile-id-label{font-size:9.5px}#plantProfile .profile-id-value{font-size:11.5px}}
`;
document.head.appendChild(style);
const previousOpen=window.openModal;
if(typeof previousOpen==='function')window.openModal=function(id){const result=previousOpen.apply(this,arguments);decorate(id);return result};
window.PLANT_PROFILE_IDENTITY={apply:decorate};
})();
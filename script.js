const modal=document.getElementById('modal');
const closeBtn=document.querySelector('.close');
const img=document.getElementById('mImg');
const fields={mNum:'',mEn:'en',mSin:'sin',mName:'name',mRole:'role',mQuote:'quote',mSymbol:'symbol',mWeapon:'weapon',mFeature:'feature',mLook:'look',mDialect:'dialect'};
function openChar(id){
 const c=CHARACTERS.find(x=>x.id===id); if(!c)return;
 const i=CHARACTERS.indexOf(c);
 img.src=`assets/${c.id}.jpg`; img.alt=`${c.name} 일러스트`;
 document.getElementById('mSymbolImg').src=`assets/symbols/${c.id}.svg`; document.getElementById('mSymbolImg').alt=`${c.name} 상징 심볼`;
 document.getElementById('mNum').textContent=`0${String(i+1).padStart(2,'0')} / SEVEN SINS`;
 for(const [el,key] of Object.entries(fields)) document.getElementById(el).textContent=c[key]||'';
 modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
document.querySelectorAll('.card').forEach(b=>b.addEventListener('click',()=>openChar(b.dataset.id)));
closeBtn.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''});
modal.addEventListener('click',e=>{if(e.target===modal)closeBtn.click()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeBtn.click()});

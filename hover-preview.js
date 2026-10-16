// Fetch the small animated clip only when someone deliberately hovers a poster.
const previewAllowed=()=>matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches&&!navigator.connection?.saveData;
document.querySelectorAll('.game-card[data-game]').forEach(card=>{
 const game=games.find(g=>g.id===card.dataset.game);
 if(!game?.previewUrl)return;
 const cover=card.querySelector('.game-cover');
 const preview=document.createElement('img');preview.className='hover-preview';preview.alt='';preview.setAttribute('aria-hidden','true');preview.decoding='async';cover.append(preview);
 let timer=null,active=false;
 function stop(){clearTimeout(timer);active=false;card.classList.remove('preview-playing');preview.removeAttribute('src')}
 function start(){if(!previewAllowed())return;clearTimeout(timer);timer=setTimeout(()=>{active=true;preview.src=game.previewUrl},140)}
 preview.addEventListener('load',()=>{if(active)card.classList.add('preview-playing')});
 preview.addEventListener('error',stop);
 card.addEventListener('pointerenter',start);card.addEventListener('pointerleave',stop);
 card.addEventListener('focusin',start);card.addEventListener('focusout',event=>{if(!card.contains(event.relatedTarget))stop()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
 matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change',stop);
});

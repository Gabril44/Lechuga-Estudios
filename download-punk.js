(()=>{
 const art={bondi:'bondi-con-ruedas.svg',campanas:'campanas-sello.svg',sapo:'sapo-estanque.svg',neon:'neon-circuito.svg',machete:'machete-alien.svg',profundidades:'profundidades-monstruo-soga.svg',kiwi:'kiwi-personaje.png'};
 document.querySelectorAll('.game-card[data-game]').forEach(card=>{
  const button=card.querySelector('.card-download');if(!button)return;
  const available=button.tagName==='A';card.classList.toggle('download-ready',available);
  button.innerHTML=`<span>${available?'DESCARGAR':'EN CAMINO'}</span><svg class="download-offset-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
 });
 const id=new URLSearchParams(location.search).get('game');const g=games.find(item=>item.id===id);const panel=document.querySelector('.demo-panel');if(!g||!panel)return;
 panel.classList.add('download-poster');panel.dataset.downloadTheme=id;panel.classList.toggle('download-ready',!!g.demoUrl);
 const scene=document.createElement('img');scene.className='download-backdrop';scene.src=g.shots?.find(shot=>/combate|recorrido|pelea/i.test(shot.label))?.src||g.shots?.[1]?.src||g.cover;scene.alt='';scene.setAttribute('aria-hidden','true');scene.loading='lazy';panel.prepend(scene);
 const tag=document.createElement('span');tag.className='download-poster-tag';tag.textContent=g.demoUrl?'¡YA PODÉS JUGAR!':'EN CAMINO';panel.append(tag);
 const title=document.createElement('strong');title.className='download-poster-title';title.textContent=g.title;panel.insertBefore(title,document.querySelector('#demo-link'));
 const character=document.createElement('img');character.className='download-character';character.src='assets/'+art[id];character.alt='';character.setAttribute('aria-hidden','true');panel.append(character);
 const leaf=document.createElement('img');leaf.className='download-poster-leaf';leaf.src='assets/hojita-'+id+'.svg';leaf.alt='';leaf.setAttribute('aria-hidden','true');panel.append(leaf);
 const arrow=document.createElement('img');arrow.className='download-doodle-arrow';arrow.src='assets/flecha-garabato.svg';arrow.alt='';arrow.setAttribute('aria-hidden','true');panel.append(arrow);
 const button=panel.querySelector('#demo-link .button');if(button){button.classList.add('download-main-button');button.innerHTML=`<span>${g.demoUrl?(g.status==='Terminado'?'DESCARGAR JUEGO':'DESCARGAR DEMO'):'PRÓXIMAMENTE'}</span><b aria-hidden="true">↓</b>`;}
})();

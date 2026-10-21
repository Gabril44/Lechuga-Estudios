const $=s=>document.querySelector(s);
$('#year').textContent=new Date().getFullYear();
const posterArt={"campanas": "campanas-sello.svg", "neon": "neon-circuito.svg", "machete": "machete-alien.svg", "sapo": "sapo-estanque.svg", "profundidades": "profundidades-linterna.svg", "kiwi": "kiwi-jefe.svg", "bondi": "bondi-con-ruedas.svg"};
games.forEach((g,i)=>{const el=document.createElement('article');el.className='game-card poster';el.dataset.game=g.id;el.innerHTML=`<button class="game-cover" aria-label="Ver ficha de ${g.title}"><img src="${g.cover}" alt="${g.title}: captura del juego" loading="lazy">${g.id==='kiwi'?'<span class="release-tape">¡YA DISPONIBLE!!!</span>':'<span class="image-label">'+(g.featured?'EN FOCO / ':'')+(g.status||'En desarrollo').toUpperCase()+'</span>'}<span class="image-arrow">↗</span></button><img class="poster-art" src="assets/${posterArt[g.id]}" alt="" aria-hidden="true">${g.id==='campanas'?'<img class="blood-drips" src="assets/campanas-goteo.svg" alt="" aria-hidden="true">':''}<div class="game-info"><span class="genre">${g.genre}</span><h3>${g.title}</h3><p>${g.description}</p><div class="game-actions"><button class="open-game">Ver ficha del juego <img class="scribble-arrow" src="assets/flecha-garabato.svg" alt="" aria-hidden="true"></button>${g.demoUrl?`<a class="card-download" href="${g.demoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Descargar ${g.title}">Descargar juego ↓</a>`:`<button class="card-download" disabled aria-label="Descarga de ${g.title} no disponible">Descargar · próximamente</button>`}</div></div>`;el.querySelectorAll('.game-cover, .open-game').forEach(b=>b.onclick=()=>location.href='game.html?game='+encodeURIComponent(g.id));$('#game-grid').append(el)});
if(siteContent.contactEmail){const a=document.createElement('a');a.className='button';a.href='mailto:'+siteContent.contactEmail;a.textContent='Enviar email ↗';$('#email-slot').append(a)}else{$('#email-slot').innerHTML='<span class="pending">Acá debería ir el email de contacto.</span>'}
siteContent.socials.forEach(s=>{const el=document.createElement(s.url?'a':'div');el.className='footer-social';if(s.url){el.href=s.url;el.target='_blank';el.rel='noopener noreferrer'}el.innerHTML=`<span>${s.name}</span><small>${s.url?'Abrir ↗':'Acá debería ir el enlace a '+s.name+'.'}</small>`;$('#socials').append(el)});

// Measure wrapped navigation and strip rather than assuming their heights.
const homeHeader=document.querySelector('header');
const homeStrip=document.querySelector('.ticker');
function sizeHomeHero(){
 document.documentElement.style.setProperty('--home-header-height',homeHeader.getBoundingClientRect().height+'px');
 document.documentElement.style.setProperty('--home-strip-height',homeStrip.getBoundingClientRect().height+'px');
}
sizeHomeHero();
const homeSizing=new ResizeObserver(sizeHomeHero);
homeSizing.observe(homeHeader);homeSizing.observe(homeStrip);

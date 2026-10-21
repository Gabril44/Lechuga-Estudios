(()=>{
 const gameId=new URLSearchParams(location.search).get('game');
 const g=typeof games!=='undefined'?games.find(item=>item.id===gameId):null;
 if(!g)return;
 const characters={campanas:'campanas-vampiro-original.png',machete:'peek-machete.svg',sapo:'peek-sapo.svg',neon:'peek-neon.svg',kiwi:'kiwi-personaje.png',profundidades:'profundidades-monstruo.png',bondi:'bondi-con-ruedas.svg'};
 const host=document.querySelector('.gallery-section');
 if(host){const perch=document.createElement('span');perch.className='secret-perch';perch.setAttribute('aria-hidden','true');const image=document.createElement('img');image.src='assets/'+characters[g.id];image.alt='';perch.append(image);host.append(perch);}
 if(g.id==='profundidades'){
  const cave=document.querySelector('#gameplay');
  if(cave){const bat=document.createElement('img');bat.src='assets/profundidades-resonante.png';bat.className='cave-secret';bat.alt='';bat.setAttribute('aria-hidden','true');bat.loading='lazy';cave.append(bat);}
 }
 const marks={kiwi:['404','null();'],campanas:['✝','☾'],machete:['✳','↗'],sapo:['✦','♜'],neon:['//','+'],profundidades:['↓','×'],bondi:['86','↗']};
 document.querySelectorAll('#detail-shots .shot').forEach((shot,i)=>{
  if(i>2)return;
  shot.classList.add('annotated-shot');const ink=document.createElement('span');ink.className='shot-ink ink-'+i;ink.setAttribute('aria-hidden','true');ink.textContent=marks[g.id][i%2];shot.append(ink);
 });
 const controls={campanas:'Teclado y ratón',sapo:'Teclado',profundidades:'WASD / flechas · joystick',machete:'WASD / flechas · joystick'};
 const release=g.demoUrl?.match(/github\.com\/([^/]+\/[^/]+)\/releases\/download\/([^/]+)\//);
 const section=document.querySelector('#demo > div:first-child');if(!section)return;
 const tech=document.createElement('dl');tech.className='release-facts';tech.setAttribute('aria-label','Ficha técnica de '+g.title);
 const facts=[['Plataforma',g.demoUrl||['campanas','sapo'].includes(g.id)?'Windows · 64 bits':'Acá debería ir la plataforma.'],['Versión',g.releaseVersion||(release?decodeURIComponent(release[2]):'Acá debería ir la versión.')],['Duración',g.durationText||'Acá debería ir la duración aproximada.'],['Controles',g.controlsText||controls[g.id]||'Acá deberían ir los controles compatibles.']];
 facts.forEach(([label,value])=>{const row=document.createElement('div');const dt=document.createElement('dt');dt.textContent=label;const dd=document.createElement('dd');dd.textContent=value;row.append(dt,dd);tech.append(row)});section.append(tech);
 const reportUrl=g.bugReportUrl||(release?'https://github.com/'+release[1]+'/issues/new':null);
 const report=document.createElement(reportUrl?'a':'button');report.className='bug-report';report.textContent='Reportar un bug ↗';
 if(reportUrl){report.href=reportUrl;report.target='_blank';report.rel='noopener noreferrer';}else{report.disabled=true;report.setAttribute('aria-describedby','bug-report-pending');}
 section.append(report);
 if(!reportUrl){const pending=document.createElement('p');pending.id='bug-report-pending';pending.className='bug-pending';pending.textContent='Acá debería ir el enlace para reportar errores de este juego.';section.append(pending);}
})();

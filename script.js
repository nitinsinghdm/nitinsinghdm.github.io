(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const translated = [...document.querySelectorAll('[data-en][data-de]')];
  const languageButtons = [...document.querySelectorAll('[data-lang]')];
  function updateThemeButton() {
    const light = root.dataset.theme === 'light';
    const german = root.lang === 'de';
    themeButton.setAttribute('aria-pressed', String(light));
    const label = german ? (light ? 'Dunkles Design aktivieren' : 'Helles Design aktivieren') : (light ? 'Switch to dark mode' : 'Switch to light mode');
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    themeButton.innerHTML = light
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5 8.5 8.5 0 1 0 20.5 13.1Z"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/></svg>';
    document.querySelector('meta[name="theme-color"]').content = light ? '#f5f5ee' : '#101411';
  }
  function setLanguage(lang) {
    if (!['en', 'de'].includes(lang)) return;
    root.lang = lang;
    translated.forEach(el => { el.textContent = el.dataset[lang]; });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
    updateThemeButton();
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) {}
    updateThemeButton();
  });
  let language = 'en';
  try { language = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
  setLanguage(language);
  document.querySelectorAll('.capabilities > div, .timeline-item, .contact-section').forEach(el => el.classList.add('reveal'));
  const sections = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04 });
    sections.forEach(section => { section.classList.add('will-reveal'); observer.observe(section); });
    motion.addEventListener('change', event => {
      if (event.matches) { observer.disconnect(); sections.forEach(section => section.classList.add('is-visible')); }
    });
  }
  const progress = document.querySelector('.reading-progress');
  const personalCard = document.querySelector('.personal-card');
  const siteHeader = document.querySelector('.site-header');
  const desktopMotion = window.matchMedia('(min-width: 761px)');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const landmarks = ['work', 'about', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
  let scheduled = false;
  function updateProgress() {
    const available = root.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0})`;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
    if (personalCard) {
      const amount = motion.matches || !desktopMotion.matches ? 0 : Math.min(window.scrollY, 900);
      personalCard.style.setProperty('--card-y', `${amount * -.045}px`);
      personalCard.style.setProperty('--card-angle', `${2 - amount * .004}deg`);
      personalCard.style.setProperty('--symbol-angle', `${amount * .08}deg`);
    }
    let active = '';
    landmarks.forEach(section => { if (section.getBoundingClientRect().top < window.innerHeight * .45) active = section.id; });
    navLinks.forEach(link => {
      const selected = active && link.hash === `#${active}`;
      link.classList.toggle('active', Boolean(selected));
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  motion.addEventListener('change', updateProgress);
  updateProgress();
})();

// Deliberate, reversible motion tied to reading position, with no autoplay.
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const guide = document.querySelector('.python-guide');
  if (guide) {
    const svg=guide.querySelector('svg'),body=guide.querySelector('.snake-body'),pattern=guide.querySelector('.snake-pattern'),head=guide.querySelector('.snake-head');
    const route=document.createElementNS('http://www.w3.org/2000/svg','path');
    const tail=document.createElementNS('http://www.w3.org/2000/svg','path');
    tail.setAttribute('fill','#b9df72');tail.setAttribute('pointer-events','none');svg.insertBefore(tail,head);
    let legs=[],total=0,frame=0,last=0,position=0,target=0,direction=1,extreme=scrollY,angle=0,coilStart=0;
    const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
    function rebuild(){
      const margin=innerWidth<=760?14:28,left=margin,right=innerWidth-margin;
      const header=document.querySelector('.site-header').getBoundingClientRect().height;
      const sections=[...document.querySelectorAll('main>.hero,main>.capabilities,main>.work-section,main>.marketing-lens,main>.about-section,main>.case-heading,main>.case-layout,.contact-section')];
      const ends=[...new Set(sections.map(e=>Math.round(e.getBoundingClientRect().bottom+scrollY)))].sort((a,b)=>a-b).filter(y=>y>header+100);
      const footer=document.querySelector('.site-footer');
      const bottom=footer?footer.getBoundingClientRect().bottom+scrollY:document.documentElement.scrollHeight;
      if(innerWidth<=760){
        route.setAttribute('d',`M ${right} ${header+14} L ${right} ${bottom-18}`);
        total=route.getTotalLength();legs=[{y0:header+14,y1:bottom-18,start:0,end:total}];
        updateTarget();schedule();return;
      }
      if(!ends.length||ends.at(-1)<bottom-30)ends.push(bottom-18);
      let x=left,y=header+14,d=`M ${x} ${y}`;legs=[];total=0;
      ends.forEach((end,i)=>{
        const nextX=i%2===0?right:left,r=20;
        const start=total;
        d+=` L ${x} ${end-r} Q ${x} ${end} ${x+(nextX>x?r:-r)} ${end} L ${nextX+(nextX>x?-r:r)} ${end} Q ${nextX} ${end} ${nextX} ${end+r}`;
        route.setAttribute('d',d);total=route.getTotalLength();
        legs.push({y0:y,y1:end,start,end:total});x=nextX;y=end+r;
      });
      route.setAttribute('d',d);updateTarget();schedule();
    }
    function updateTarget(){
      const reader=scrollY+innerHeight*.36;
      const leg=legs.find(l=>reader<=l.y1)||legs.at(-1);
      if(!leg)return;
      if(innerWidth<=760){target=clamp(reader-leg.y0,0,total);if(scrollY<2)target=0;return;}
      const vertical=Math.max(1,leg.y1-leg.y0),travel=leg.end-leg.start;
      const approach=Math.min(200,vertical*.4),turnStart=leg.y1-approach;
      const verticalTravel=Math.max(0,travel-(innerWidth-56));
      target=reader<turnStart?leg.start+clamp((reader-leg.y0)/Math.max(1,turnStart-leg.y0),0,1)*verticalTravel:leg.start+verticalTravel+clamp((reader-turnStart)/approach,0,1)*(travel-verticalTravel);
      if(scrollY<2)target=0;
      if(scrollY>=document.documentElement.scrollHeight-innerHeight-2)target=total;
    }
    function draw(now){
      frame=0;const dt=Math.min(40,now-(last||now-16));last=now;
      position+=(target-position)*(reduced.matches?1:1-Math.exp(-dt/180));
      svg.setAttribute('viewBox',`0 0 ${innerWidth} ${innerHeight}`);
      const len=innerWidth<=760?110:170,h=route.getPointAtLength(clamp(position,0,total));
      const ahead=route.getPointAtLength(clamp(position+direction*4,0,total));
      let desired=Math.atan2(ahead.y-h.y,ahead.x-h.x)-Math.PI/2;
      const delta=Math.atan2(Math.sin(desired-angle),Math.cos(desired-angle));angle+=delta*(reduced.matches?1:1-Math.exp(-dt/100));
      const elapsed=coilStart?now-coilStart:0,coil=coilStart?Math.sin(Math.PI*Math.min(1,elapsed/1500)):0;
      if(elapsed>=1500)coilStart=0;
      const pts=[];
      for(let i=0;i<=64;i++){
        const t=i/64,s=position-direction*t*len,p=route.getPointAtLength(clamp(s,0,total));
        const q=route.getPointAtLength(clamp(s+2,0,total)),a=Math.atan2(q.y-p.y,q.x-p.x);
        const wave=Math.sin(t*9-position/70)*5*Math.sin(t*Math.PI);
        let x=p.x-Math.sin(a)*wave,y=p.y+Math.cos(a)*wave;
        if(s<0)y+=s;if(s>total)y+=s-total;
        x=x*(1-coil)+(h.x+Math.sin(t*Math.PI*4.5)*t*(innerWidth<=760?8:28))*coil;
        y=y*(1-coil)+(h.y+Math.cos(t*Math.PI*4.5)*t*28)*coil;
        pts.push([x,y-scrollY]);
      }
      const path=pts.slice(0,49).map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' ');
      body.setAttribute('d',path);pattern.setAttribute('d',path);
      const edges=[[],[]];
      for(let i=48;i<=64;i++){const a=pts[Math.max(0,i-1)],b=pts[Math.min(64,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],n=Math.hypot(dx,dy)||1,r=5.5*(64-i)/16;edges[0].push([pts[i][0]-dy/n*r,pts[i][1]+dx/n*r]);edges[1].push([pts[i][0]+dy/n*r,pts[i][1]-dx/n*r]);}
      tail.setAttribute('d',[...edges[0],...edges[1].reverse()].map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' ')+' Z');
      head.setAttribute('transform',`translate(${h.x},${h.y-scrollY}) rotate(${angle*180/Math.PI})`);
      guide.dataset.direction=direction===1?'down':'up';
      if(!reduced.matches&&(Math.abs(target-position)>.1||Math.abs(delta)>.01||coilStart))frame=requestAnimationFrame(draw);
    }
    function schedule(){if(!frame){last=0;frame=requestAnimationFrame(draw);}}
    addEventListener('scroll',()=>{extreme=direction===1?Math.max(extreme,scrollY):Math.min(extreme,scrollY);if((direction===1&&scrollY<extreme-18)||(direction===-1&&scrollY>extreme+18)){direction*=-1;extreme=scrollY;}updateTarget();schedule();},{passive:true});
    addEventListener('resize',rebuild);addEventListener('load',rebuild);
    reduced.addEventListener('change',schedule);
    guide.addEventListener('click',()=>{if(!reduced.matches){coilStart=performance.now();schedule();}});
    rebuild();position=target;
    document.fonts.ready.then(rebuild);
  }
  document.querySelectorAll('.case-gallery').forEach(gallery => {
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    if (slides.length < 2) return;
    let current = 0;
    const counter = gallery.querySelector('.gallery-count');
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== current; });
      counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
    gallery.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
    gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
    gallery.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    });
    let touchX = null;
    gallery.addEventListener('touchstart', event => { touchX = event.touches[0].clientX; }, {passive:true});
    gallery.addEventListener('touchend', event => {
      if (touchX === null) return;
      const distance = touchX - event.changedTouches[0].clientX;
      if (Math.abs(distance) > 55) show(current + (distance > 0 ? 1 : -1));
      touchX = null;
    }, {passive:true});
  });
})();

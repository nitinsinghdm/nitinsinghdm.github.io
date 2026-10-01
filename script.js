// Content stays visible if JavaScript is unavailable.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('active'); revealObserver.unobserve(entry.target); }
  }), { threshold: 0, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(element => revealObserver.observe(element));
}
// Mixed content carousels: workflow panels and original screenshots share one track.
document.querySelectorAll('.carousel-container').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  let index = 0;
  const count = document.createElement('p');
  count.className = 'slide-count'; count.setAttribute('aria-live', 'polite');
  carousel.append(count);
  function show(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.hidden = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
    });
    count.textContent = `${index + 1} / ${slides.length}`;
  }
  carousel.querySelector('.next')?.addEventListener('click', () => show(index + 1));
  carousel.querySelector('.prev')?.addEventListener('click', () => show(index - 1));
  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault(); show(index + (e.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let startX = 0, startY = 0;
  carousel.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; startY = e.changedTouches[0].clientY; }, {passive:true});
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
  }, {passive:true});
  carousel.querySelectorAll('.carousel-btn').forEach(button => { button.hidden = slides.length < 2; });
  show(0);
});
const filters = [...document.querySelectorAll('.filter-btn')];
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('.project-block').forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) count++;
  });
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.getElementById('filterStatus').textContent = `${count} projects shown`;
}));
const progress = document.querySelector('.scroll-progress');
let scheduled = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
const navLinks = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }), { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => navObserver.observe(section));
}
const germanCopy = {"sidebarLabel": "MARKETING DATA ANALYST / DEUTSCHLAND", "mobileResumeText": "Lebenslauf", "heroTitle": "Verstehen von<br><span class=\"accent\">Kunden,</span><br>Verhalten<br>und unsichtbaren<br>Mustern.", "heroMeta": "Marketing Data Analyst · Kampagnen-, Kunden- & Performance-Analyse", "aboutTitle": "Hallo.<br>Ich bin Nitin Singh.", "aboutText1": "Ich habe mir Webentwicklung selbst beigebracht und als Freelancer Websites für Kunden entwickelt. Dabei wurde ich neugierig auf die Customer Journey: Warum verhalten sich Menschen unterschiedlich, wo springen sie ab und was führt zu Ergebnissen?", "aboutText2": "Diese Neugier führte mich ins digitale Marketing und in die Marketinganalyse. Ich beschäftige mich mit Kampagnenperformance, Kundenverhalten, Funnels, Segmentierung und A/B-Tests. Mit SQL, Python, Google Analytics und BI-Dashboards unterstütze ich Marketingentscheidungen.", "aboutText3": "Ich lerne durch praktische Arbeit — von E-Commerce-Analysen bis zu Experimenten mit KI, APIs und Automatisierung. Heute suche ich eine Position in Deutschland, in der ich Marketing, Kundeneinblicke und Technologie verbinden kann. Immer neugierig. Immer am Lernen. Immer auf der Suche nach dem Warum hinter den Zahlen.", "servicesLabel": "WORAN ICH ARBEITE", "service1": "Kampagnenperformance", "service2": "Business Intelligence", "service3": "Marketing Analytics", "service4": "Kundensegmentierung", "service5": "Funnel-Analyse", "service6": "Dashboard-Entwicklung", "skillsLabel": "TOOLS & TECH STACK", "skillTitle1": "Marketing- & Kundenanalyse", "skillTitle2": "Visualisierung & Reporting", "skillTitle3": "Data Engineering", "skillTitle4": "Marketing-Tools & Automatisierung", "experienceLabel": "BERUFSERFAHRUNG", "exp1desc": "Betreuung von sechs Google-Ads-Kampagnen (3.000–8.000 €/Monat), mit einem Beitrag zu einer Steigerung der Conversion-Rate um 28%. SQL-basierte Funnel-Analysen identifizierten Conversion-Abbrüche. Kohorten-, Retention- und Segmentierungsanalysen unterstützten eine ROI-Verbesserung von 15–20%. A/B-Tests mit 8.000–15.000 Nutzern trugen zu einer CTR-Steigerung von 10–12% bei. Dashboards erfassten ROI, CTR, Conversions und Kampagnen-KPIs.", "exp2desc": "Implementierung von Google-Analytics-Tracking und KPI-Monitoring für eine LMS-Plattform mit über 10.000 monatlichen Nutzern. Website-Analysen halfen, die Absprungrate von etwa 58% auf 46% zu senken. Entwicklung von Dashboards und Reporting für Engagement, Einschreibungen und Website-Performance. Unterstützung AWS-basierter Workflows für digitale Inhalte.", "exp3desc": "Unterstützung von digitalem Marketing und Analytics für über fünf Kundenkampagnen. Einsatz von HubSpot und Bitrix24 für Lead-Tracking und Kampagnenabläufe. Monitoring von Traffic, Engagement, Conversions und Kampagnenperformance. Analyse von CRM-Daten zu Lead-Aktivitäten, Kundeninteraktionen und Follow-ups.", "educationLabel": "AUSBILDUNG", "languagesLabel": "SPRACHEN", "contactTitle": "Marketingdaten in bessere Entscheidungen verwandeln.", "footerRole": "Marketing Data Analyst · Deutschland"};
const englishCopy = Object.fromEntries(Object.keys(germanCopy).map(id => [id, document.getElementById(id)?.innerHTML || '']));
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'de') return;
  document.documentElement.lang = lang;
  const copy = lang === 'de' ? germanCopy : englishCopy;
  Object.entries(copy).forEach(([id, value]) => { const element = document.getElementById(id); if (element) element.innerHTML = value; });
  document.querySelectorAll('.lang-btn').forEach(button => {
    const selected = button.textContent.trim().toLowerCase() === lang;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
setLanguage('en');

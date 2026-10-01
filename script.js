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
const germanCopy = {"sidebarLabel": "MARKETING DATA ANALYST / DEUTSCHLAND", "mobileResumeText": "Lebenslauf", "heroTitle": "Verstehen von<br><span class=\"accent\">Kunden,</span><br>Verhalten<br>und unsichtbaren<br>Mustern.", "heroMeta": "Marketing Data Analyst · Kampagnen-, Kunden- & Performance-Analyse", "aboutTitle": "Hallo.<br>Ich bin Nitin Singh.", "aboutText1": "Ich habe mir Webentwicklung selbst beigebracht und als Freelancer Websites für Kunden entwickelt. Dabei habe ich gelernt, Bedürfnisse zu verstehen, Probleme eigenständig zu lösen und über die Website hinaus auf die gesamte Customer Journey zu schauen.", "aboutText2": "Diese Neugier führte mich ins digitale Marketing und dann in die Marketinganalyse. Ich beschäftige mich mit Kampagnenperformance, Kundenverhalten, Funnels, Segmentierung, A/B-Tests und Dashboards. Mit SQL, Python, GA4 und BI-Tools verbinde ich Marketingfragen mit Daten.", "aboutText3": "Ich lerne am besten durch praktische Arbeit: mit Analytics-Projekten und Experimenten mit KI, APIs und Automatisierung. Ich suche eine Position in Deutschland, in der ich Marketing, Kunden, Daten und Technologie verbinden, praktische Erkenntnisse beitragen und mich weiterentwickeln kann.", "servicesLabel": "WORAN ICH ARBEITE", "service1": "Kampagnenperformance", "service2": "Business Intelligence", "service3": "Marketing Analytics", "service4": "Kundensegmentierung", "service5": "Funnel-Analyse", "service6": "Dashboard-Entwicklung", "skillsLabel": "TOOLS & TECH STACK", "skillTitle1": "Marketing- & Kundenanalyse", "skillTitle2": "Visualisierung & Reporting", "skillTitle3": "Data Engineering", "skillTitle4": "Marketing-Tools & Automatisierung", "experienceLabel": "BERUFSERFAHRUNG", "exp1desc": "Analyse der Kampagnenperformance anhand von Ausgaben, CTR, Conversions und ROI. SQL-basierte Funnel-, Kohorten- und Segmentierungsanalysen zeigten Abbrüche, Zielgruppentrends und Wachstumspotenziale auf. Konzeption und Auswertung von A/B-Tests mit 8.000–15.000 Nutzern, die zu einer CTR-Steigerung von 10–12% beitrugen. KPI-Dashboards erfassten Conversions, ROI, Kampagnentrends und Budgeteffizienz. Analysen zu Kundenbindung und Verhalten unterstützten präziseres Targeting und eine Verbesserung des Kampagnen-ROI um 15–20%.", "exp2desc": "Implementierung von Google-Analytics-Tracking und KPI-Monitoring für eine LMS-Plattform mit über 10.000 monatlichen Nutzern. Analysen zu Nutzerverhalten und Website-Performance halfen, die Absprungrate von etwa 58% auf 46% zu senken. Dashboards und Berichte erfassten Engagement, Einschreibungen und Website-Performance. Unterstützung AWS-basierter Content-Workflows und digitaler Asset-Verwaltung.", "exp3desc": "Unterstützung der Kampagnenanalyse für mehr als fünf Kundenkonten mit Tracking von Traffic, Engagement und Conversions. Verwaltung von Leads, Kampagnenaktivitäten und Kundeninteraktionen in HubSpot und Bitrix24. Analyse von Lead-Verhalten, Follow-up-Mustern und Customer Journeys. Erstellung von Kampagnenberichten für operative Marketingentscheidungen.", "educationLabel": "AUSBILDUNG", "languagesLabel": "SPRACHEN", "contactTitle": "Marketingdaten in bessere Entscheidungen verwandeln.", "footerRole": "Marketing Data Analyst · Deutschland", "aboutClosing": "Immer neugierig. Immer am Lernen. Immer auf der Suche nach dem Warum hinter den Zahlen.", "cvCopy29": "Analyse von über einer Million Transaktionen zu Kundenverhalten, Umsatztreibern und Conversion-Trends. Die Funnel-Analyse identifizierte etwa 30% Abbrüche im Checkout und wichtige Conversion-Potenziale.", "cvCopy30": "Entwicklung von KPI-Dashboards für Umsatz, durchschnittlichen Bestellwert, Conversion und Kundenperformance.", "cvCopy31": "Entwicklung eines KI-Workflows für Stellensuche, Bewerbungsverfolgung, Recruiter-Kontakt und Interviewplanung.", "cvCopy32": "Integration von Gmail, Google Sheets und Google Calendar über n8n und APIs zur Zentralisierung der Bewerbungsabläufe.", "cvCopy33": "Entwurf einer PostgreSQL-Bankdatenbank für Kunden, Konten, Transaktionen und AML-Analysen. Python-Pipelines erzeugten 10.000 Kunden, 12.000 Konten und 18.000 Begünstigte mit Risikoattributen.", "cvCopy34": "Entwicklung von ETL-Workflows von Staging zu Core mit SQL-Prüfungen für Duplikate, Fremdschlüssel und Geschäftsregeln.", "cvCopy35": "Verarbeitung von über 50.000 Stellenanzeigen zur Analyse von Kompetenznachfrage, Gehaltstrends und Marktstrukturen in Deutschland.", "cvCopy36": "Automatisierte Vorverarbeitung reduzierte den manuellen Analyseaufwand um etwa 40%. Identifikation gefragter Kompetenzcluster und Gehaltstrends für fundierte Markteinblicke."};
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

/* ==========================================
   REVEAL ANIMATION
========================================== */
const reveals = document.querySelectorAll(".reveal");
function revealSections() {
    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 120) {
            section.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealSections);
revealSections();
/* ==========================================
   PROJECT CAROUSELS
========================================== */
const carousels =
document.querySelectorAll(".carousel-container");
carousels.forEach((carousel) => {
    const images =
    carousel.querySelectorAll(".carousel-image");
    const nextBtn =
    carousel.querySelector(".next");
    const prevBtn =
    carousel.querySelector(".prev");
    if (images.length <= 1) {
        if (nextBtn)
            nextBtn.style.display = "none";
        if (prevBtn)
            prevBtn.style.display = "none";
        return;
    }
    let index = 0;
    function showImage(i) {
        images.forEach((img) => {
            img.classList.remove("active");
        });
        images[i].classList.add("active");
    }
    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage(index);
    });
    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage(index);
    });
    setInterval(() => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage(index);
    }, 2500);
});

// Keep English copy in the HTML as the source of truth.
const germanCopy = {
  "sidebarLabel": "MARKETING DATA ANALYST / DEUTSCHLAND",
  "mobileResumeText": "Lebenslauf",
  "heroTitle": "Verstehen von<br>Kunden,<br>Verhalten<br>und unsichtbaren<br>Mustern.",
  "heroMeta": "Marketing Data Analyst · Kampagnen-, Kunden- & Performance-Analyse",
  "aboutTitle": "Hallo.<br>Ich bin Nitin Singh.",
  "aboutText1": "Ich habe mir Webentwicklung selbst beigebracht und als Freelancer Websites für Kunden entwickelt. Dabei wurde ich neugierig auf die Customer Journey: Warum verhalten sich Menschen unterschiedlich, wo springen sie ab und was führt zu Ergebnissen?",
  "aboutText2": "Diese Neugier führte mich ins digitale Marketing und in die Marketinganalyse. Ich beschäftige mich mit Kampagnenperformance, Kundenverhalten, Funnels, Segmentierung und A/B-Tests. Mit SQL, Python, Google Analytics und BI-Dashboards unterstütze ich Marketingentscheidungen.",
  "aboutText3": "Ich lerne durch praktische Arbeit — von E-Commerce-Analysen bis zu Experimenten mit KI, APIs und Automatisierung. Heute suche ich eine Position in Deutschland, in der ich Marketing, Kundeneinblicke und Technologie verbinden kann. Immer neugierig. Immer am Lernen. Immer auf der Suche nach dem Warum hinter den Zahlen.",
  "servicesLabel": "WORAN ICH ARBEITE",
  "service1": "Kampagnenperformance",
  "service2": "Business Intelligence",
  "service3": "Marketing Analytics",
  "service4": "Kundensegmentierung",
  "service5": "Funnel-Analyse",
  "service6": "Dashboard-Entwicklung",
  "skillsLabel": "TOOLS & TECH STACK",
  "skillTitle1": "Marketing- & Kundenanalyse",
  "skillTitle2": "Visualisierung & Reporting",
  "skillTitle3": "Data Engineering",
  "skillTitle4": "Marketing-Tools & Automatisierung",
  "experienceLabel": "BERUFSERFAHRUNG",
  "exp1desc": "Betreuung von sechs Google-Ads-Kampagnen (3.000–8.000 €/Monat), mit einem Beitrag zu einer Steigerung der Conversion-Rate um 28%. SQL-basierte Funnel-Analysen identifizierten Conversion-Abbrüche. Kohorten-, Retention- und Segmentierungsanalysen unterstützten eine ROI-Verbesserung von 15–20%. A/B-Tests mit 8.000–15.000 Nutzern trugen zu einer CTR-Steigerung von 10–12% bei. Dashboards erfassten ROI, CTR, Conversions und Kampagnen-KPIs.",
  "exp2desc": "Implementierung von Google-Analytics-Tracking und KPI-Monitoring für eine LMS-Plattform mit über 10.000 monatlichen Nutzern. Website-Analysen halfen, die Absprungrate von etwa 58% auf 46% zu senken. Entwicklung von Dashboards und Reporting für Engagement, Einschreibungen und Website-Performance. Unterstützung AWS-basierter Workflows für digitale Inhalte.",
  "exp3desc": "Unterstützung von digitalem Marketing und Analytics für über fünf Kundenkampagnen. Einsatz von HubSpot und Bitrix24 für Lead-Tracking und Kampagnenabläufe. Monitoring von Traffic, Engagement, Conversions und Kampagnenperformance. Analyse von CRM-Daten zu Lead-Aktivitäten, Kundeninteraktionen und Follow-ups.",
  "educationLabel": "AUSBILDUNG",
  "languagesLabel": "SPRACHEN",
  "contactTitle": "Marketingdaten in bessere Entscheidungen verwandeln.",
  "footerRole": "Marketing Data Analyst · Deutschland"
};

const englishCopy = Object.fromEntries(Object.keys(germanCopy).map(id => [id, document.getElementById(id).innerHTML]));
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'de') return;
  document.documentElement.lang = lang;
  const copy = lang === 'de' ? germanCopy : englishCopy;
  Object.entries(copy).forEach(([id, value]) => {
    document.getElementById(id).innerHTML = value;
  });
  document.querySelectorAll('.lang-btn').forEach(button => {
    const selected = button.textContent.trim().toLowerCase() === lang;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
setLanguage('en');
window.addEventListener('load', revealSections);
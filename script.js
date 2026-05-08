/* =========================
   REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < windowHeight - 120){
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* =========================
   AUTO CAROUSEL
========================= */

const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {

  const images = carousel.querySelectorAll(".carousel-image");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let index = 0;

  function showImage(i){

    images.forEach((img) => {
      img.classList.remove("active");
    });

    images[i].classList.add("active");

  }

  nextBtn.addEventListener("click", () => {

    index = (index + 1) % images.length;
    showImage(index);

  });

  prevBtn.addEventListener("click", () => {

    index = (index - 1 + images.length) % images.length;
    showImage(index);

  });

  /* AUTO SLIDE */

  setInterval(() => {

    index = (index + 1) % images.length;
    showImage(index);

  }, 2000);

});

/* =========================
   LANGUAGE SWITCH
========================= */

function updateButtons(lang){

  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  buttons.forEach((btn) => {

    if(btn.innerText.toLowerCase() === lang){
      btn.classList.add("active");
    }

  });

}

/* =========================
   LANGUAGE FUNCTION
========================= */

function setLanguage(lang){

  updateButtons(lang);

  /* =========================
     ENGLISH
  ========================= */

  if(lang === "en"){

    document.documentElement.lang = "en";

    /* SIDEBAR */

    document.getElementById("sidebarLabel").innerHTML =
      "DATA ANALYST / GERMANY";

    document.getElementById("resumeText").innerHTML =
      "Resume";

    document.getElementById("mobileResumeText").innerHTML =
      "Resume";

    /* HERO */

    document.getElementById("heroSmall").innerHTML =
      "Portfolio / 2026";

    document.getElementById("heroTitle").innerHTML =
      `Understanding<br>
      movement,<br>
      behavior,<br>
      and invisible<br>
      patterns.`;

    /* ABOUT */

    document.getElementById("aboutTitle").innerHTML =
      `Hello.<br>
      I’m Nitin Singh.`;

    document.getElementById("aboutText1").innerHTML =
      `A Berlin-based data analyst exploring forecasting,
      behavioral patterns,
      movement,
      and large-scale systems through data.`;

    document.getElementById("aboutText2").innerHTML =
      `I enjoy understanding why systems behave differently under pressure —
      from transport congestion and customer drop-offs
      to hiring trends and operational inefficiencies.`;

    document.getElementById("aboutText3").innerHTML =
      `I became obsessed with understanding why systems slow down,
      why users disappear halfway through funnels,
      and how invisible patterns shape real-world systems.`;

    /* SERVICES */

    document.getElementById("servicesLabel").innerHTML =
      "WHAT I WORK ON";

    document.getElementById("service1").innerHTML =
      "Transport Intelligence";

    document.getElementById("service2").innerHTML =
      "Forecasting Systems";

    document.getElementById("service3").innerHTML =
      "Behavioral Analytics";

    document.getElementById("service4").innerHTML =
      "Urban Mobility";

    document.getElementById("service5").innerHTML =
      "Funnel Analysis";

    document.getElementById("service6").innerHTML =
      "Product Analytics";

    /* SKILLS */

    document.getElementById("skillsLabel").innerHTML =
      "TOOLS & STACK";

    document.getElementById("skillTitle1").innerHTML =
      "Analytics";

    document.getElementById("skillTitle2").innerHTML =
      "Visualization";

    document.getElementById("skillTitle3").innerHTML =
      "Data Engineering";

    document.getElementById("skillTitle4").innerHTML =
      "Workflow";

    /* PROJECTS */

    document.getElementById("projectsLabel").innerHTML =
      "SELECTED PROJECTS";

    document.getElementById("project1Title").innerHTML =
      "Transport Network Analysis & Optimization System";

    document.getElementById("project1Text1").innerHTML =
      `Processed and analyzed 34M+ GTFS records
      to identify congestion behavior,
      route inefficiencies,
      delay propagation,
      and operational variability across Berlin transport systems.`;

    document.getElementById("project1Text2").innerHTML =
      `Built forecasting models and analytics systems
      to study peak-hour movement patterns
      and network optimization opportunities.`;

    document.getElementById("project2Title").innerHTML =
      "Germany Data Job Market Analysis";

    document.getElementById("project2Text1").innerHTML =
      `Analyzed 50K+ job postings across Germany
      to understand hiring trends,
      SQL demand,
      salary patterns,
      and BI ecosystem shifts.`;

    document.getElementById("project2Text2").innerHTML =
      `Built preprocessing pipelines,
      skill-demand analysis,
      and market segmentation visualizations
      to understand the evolving analytics landscape.`;

    document.getElementById("project3Title").innerHTML =
      "E-Commerce Sales Performance Analysis";

    document.getElementById("project3Text1").innerHTML =
      `Explored customer behavior,
      revenue patterns,
      checkout abandonment,
      and purchasing trends using 1M+ transactions.`;

    document.getElementById("project3Text2").innerHTML =
      `Built KPI dashboards,
      conversion funnel analysis,
      and segmentation insights
      to identify revenue optimization opportunities.`;

    /* EXPERIENCE */

    document.getElementById("experienceLabel").innerHTML =
      "EXPERIENCE";

    document.getElementById("exp1").innerHTML =
      "Performance Marketing & Analytics Analyst";

    document.getElementById("exp2").innerHTML =
      "Web & Analytics Developer";

    document.getElementById("exp1desc").innerHTML =
      `Worked across campaign analytics,
      conversion funnels,
      audience segmentation,
      and performance optimization.

      Built reporting systems to analyze customer behavior,
      identify drop-offs,
      improve ROI,
      and support data-driven campaign decisions across multiple marketing channels.`;

    document.getElementById("exp2desc").innerHTML =
      `Built and optimized analytics tracking systems
      for an LMS platform used by thousands of learners.

      Worked closely with product and founder teams
      to improve engagement,
      reduce bounce rates,
      and better understand user learning behavior.`;

    /* CONTACT */

    document.getElementById("contactTitle").innerHTML =
      "Let’s build something meaningful with data.";

  }

  /* =========================
     GERMAN
  ========================= */

  if(lang === "de"){

    document.documentElement.lang = "de";

    /* SIDEBAR */

    document.getElementById("sidebarLabel").innerHTML =
      "DATA ANALYST / DEUTSCHLAND";

    document.getElementById("resumeText").innerHTML =
      "Lebenslauf";

    document.getElementById("mobileResumeText").innerHTML =
      "Lebenslauf";

    /* HERO */

    document.getElementById("heroSmall").innerHTML =
      "Portfolio / 2026";

    document.getElementById("heroTitle").innerHTML =
      `Verstehen von<br>
      Bewegung,<br>
      Verhalten,<br>
      und unsichtbaren<br>
      Mustern.`;

    /* ABOUT */

    document.getElementById("aboutTitle").innerHTML =
      `Hallo.<br>
      Ich bin Nitin Singh.`;

    document.getElementById("aboutText1").innerHTML =
      `Ein Data Analyst aus Deutschland mit Fokus auf Prognosen,
      Verhaltensmuster,
      Bewegung,
      und große Datensysteme.`;

    document.getElementById("aboutText2").innerHTML =
      `Ich analysiere gerne,
      warum Systeme unter Druck unterschiedlich reagieren —
      von Verkehrsstaus bis hin zu Nutzerabbrüchen
      und betrieblichen Ineffizienzen.`;

    document.getElementById("aboutText3").innerHTML =
      `Ich wurde davon fasziniert zu verstehen,
      warum Systeme langsamer werden
      und wie unsichtbare Muster reale Prozesse beeinflussen.`;

    /* SERVICES */

    document.getElementById("servicesLabel").innerHTML =
      "WORAN ICH ARBEITE";

    document.getElementById("service1").innerHTML =
      "Transportanalyse";

    document.getElementById("service2").innerHTML =
      "Prognosesysteme";

    document.getElementById("service3").innerHTML =
      "Verhaltensanalyse";

    document.getElementById("service4").innerHTML =
      "Städtische Mobilität";

    document.getElementById("service5").innerHTML =
      "Funnel-Analyse";

    document.getElementById("service6").innerHTML =
      "Produktanalyse";

    /* SKILLS */

    document.getElementById("skillsLabel").innerHTML =
      "TOOLS & TECH STACK";

    document.getElementById("skillTitle1").innerHTML =
      "Analyse";

    document.getElementById("skillTitle2").innerHTML =
      "Visualisierung";

    document.getElementById("skillTitle3").innerHTML =
      "Datenengineering";

    document.getElementById("skillTitle4").innerHTML =
      "Workflow";

    /* PROJECTS */

    document.getElementById("projectsLabel").innerHTML =
      "AUSGEWÄHLTE PROJEKTE";

    document.getElementById("project1Title").innerHTML =
      "Transportnetz Analyse & Optimierungssystem";

    document.getElementById("project1Text1").innerHTML =
      `Analyse von über 34 Millionen GTFS-Datensätzen
      zur Untersuchung von Verkehrsverhalten,
      Verspätungen,
      Engpässen
      und Netzwerkeffizienz im Verkehrssystem.`;

    document.getElementById("project1Text2").innerHTML =
      `Entwicklung von Prognosemodellen
      und Analysesystemen
      zur Untersuchung von Stoßzeiten
      und Optimierungsmöglichkeiten.`;

    document.getElementById("project2Title").innerHTML =
      "Analyse des Deutschen Datenjobmarkts";

    document.getElementById("project2Text1").innerHTML =
      `Analyse von über 50.000 Stellenanzeigen
      zur Untersuchung von SQL-Nachfrage,
      Gehaltsmustern,
      und Hiring-Trends in Deutschland.`;

    document.getElementById("project2Text2").innerHTML =
      `Entwicklung von Datenpipelines,
      Skill-Analysen,
      und Marktsegmentierungsvisualisierungen
      zur Untersuchung des Analytics-Marktes.`;

    document.getElementById("project3Title").innerHTML =
      "E-Commerce Verkaufsanalyse";

    document.getElementById("project3Text1").innerHTML =
      `Analyse von Kundenverhalten,
      Umsatzmustern,
      Kaufabbrüchen
      und Einkaufstrends anhand von über 1 Million Transaktionen.`;

    document.getElementById("project3Text2").innerHTML =
      `Erstellung von KPI-Dashboards,
      Funnel-Analysen
      und Segmentierungsmodellen
      zur Umsatzoptimierung.`;

    /* EXPERIENCE */

    document.getElementById("experienceLabel").innerHTML =
      "ERFAHRUNG";

    document.getElementById("exp1").innerHTML =
      "Performance Marketing & Analytics Analyst";

    document.getElementById("exp2").innerHTML =
      "Web & Analytics Entwickler";

    document.getElementById("exp1desc").innerHTML =
      `Arbeit an Kampagnenanalysen,
      Conversion Funnels,
      Zielgruppensegmentierung
      und Performanceoptimierung.

      Entwicklung von Reportingsystemen
      zur Analyse von Nutzerverhalten,
      ROI-Verbesserung
      und datenbasierten Entscheidungen.`;

    document.getElementById("exp2desc").innerHTML =
      `Entwicklung und Optimierung von Analytics-Tracking-Systemen
      für eine LMS-Plattform mit tausenden Nutzern.

      Zusammenarbeit mit Produkt- und Gründerteams
      zur Verbesserung von Engagement
      und Nutzerverhalten.`;

    /* CONTACT */

    document.getElementById("contactTitle").innerHTML =
      "Lass uns etwas Sinnvolles mit Daten entwickeln.";

  }

}

/* DEFAULT */

setLanguage("en");
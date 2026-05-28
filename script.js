/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
  document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight =
      window.innerHeight;

    const sectionTop =
      section.getBoundingClientRect().top;

    if(sectionTop < windowHeight - 120){

      section.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* =========================
   AUTO CAROUSEL
========================= */

const carousels =
  document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {

  const images =
    carousel.querySelectorAll(".carousel-image");

  const nextBtn =
    carousel.querySelector(".next");

  const prevBtn =
    carousel.querySelector(".prev");

  /* SINGLE IMAGE */

  if(images.length <= 1){

    if(nextBtn) nextBtn.style.display = "none";

    if(prevBtn) prevBtn.style.display = "none";

    return;
  }

  let index = 0;

  function showImage(i){

    images.forEach((img) => {

      img.classList.remove("active");

    });

    images[i].classList.add("active");

  }

  /* NEXT */

  nextBtn.addEventListener("click", () => {

    index++;

    if(index >= images.length){

      index = 0;
    }

    showImage(index);

  });

  /* PREVIOUS */

  prevBtn.addEventListener("click", () => {

    index--;

    if(index < 0){

      index = images.length - 1;
    }

    showImage(index);

  });

  /* AUTO SLIDE */

  setInterval(() => {

    index++;

    if(index >= images.length){

      index = 0;
    }

    showImage(index);

  }, 2000);

});

/* =========================
   LANGUAGE SWITCH
========================= */

function setLanguage(lang){

  const buttons =
    document.querySelectorAll(".lang-btn");

  buttons.forEach((btn) => {

    btn.classList.remove("active");

  });

  /* ACTIVE BUTTONS */

  if(lang === "en"){

    buttons.forEach((btn) => {

      if(btn.innerText === "EN"){

        btn.classList.add("active");
      }

    });

  }else{

    buttons.forEach((btn) => {

      if(btn.innerText === "DE"){

        btn.classList.add("active");
      }

    });

  }

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
      `A Germany-based data analyst exploring forecasting,
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
      "Analytics & BI";

    document.getElementById("skillTitle2").innerHTML =
      "Visualization & Reporting";

    document.getElementById("skillTitle3").innerHTML =
      "Data Engineering";

    document.getElementById("skillTitle4").innerHTML =
      "Product & Workflow";

    /* STATS */

    document.querySelector(".stats .section-label").innerHTML =
      "ANALYTICS IMPACT";

    const statCards =
      document.querySelectorAll(".stat-card p");

    statCards[0].innerHTML =
      "GTFS Records Processed";

    statCards[1].innerHTML =
      "Job Listings Analyzed";

    statCards[2].innerHTML =
      "E-Commerce Transactions";

    statCards[3].innerHTML =
      "Dashboards Built";

    /* PROJECT LABEL */

    document.querySelector(".projects .section-label").innerHTML =
      "SELECTED PROJECTS";

    /* PROJECT TITLES */

    const projectTitles =
      document.querySelectorAll(".project-heading h3");

    projectTitles[0].innerHTML =
      `Transport Network Analysis &
      Optimization System`;

    projectTitles[1].innerHTML =
      `Data Job Market Analysis –
      Germany`;

    projectTitles[2].innerHTML =
      `E-Commerce Sales
      Performance Analysis`;

    projectTitles[3].innerHTML =
      `Modern Data Pipeline
      Architecture`;

    /* PROJECT STACKS */

    const projectStacks =
      document.querySelectorAll(".project-stack");

    projectStacks[0].innerHTML =
      "Python · SQL · Tableau · Forecasting · NetworkX";

    projectStacks[1].innerHTML =
      "Python · Pandas · NumPy · Matplotlib · SQL";

    projectStacks[2].innerHTML =
      "SQL · BigQuery · Looker Studio · Funnel Analytics";

    projectStacks[3].innerHTML =
      "dbt · Databricks · SQL · ETL · Data Modeling";

    /* PROJECT DESCRIPTIONS */

    const projectParagraphs =
      document.querySelectorAll(".project-content p:not(.project-stack)");

    /* PROJECT 1 */

    projectParagraphs[0].innerHTML =
      `Processed and analyzed 34M+ GTFS records
      to identify congestion behavior,
      route inefficiencies,
      delay propagation,
      and operational variability across transport systems.`;

    projectParagraphs[1].innerHTML =
      `Built forecasting models and analytics systems
      to study peak-hour movement patterns
      and optimization opportunities.`;

    /* PROJECT 2 */

    projectParagraphs[2].innerHTML =
      `Processed 50K+ job postings analyzing demand trends
      for SQL,
      Python,
      BI tools,
      and salary distribution across Germany.`;

    projectParagraphs[3].innerHTML =
      `Built automated preprocessing workflows,
      market segmentation analysis,
      and demand forecasting insights.`;

    /* PROJECT 3 */

    projectParagraphs[4].innerHTML =
      `Analyzed 1M+ transactions identifying customer behavior,
      checkout abandonment,
      revenue drivers,
      and purchasing trends.`;

    projectParagraphs[5].innerHTML =
      `Built KPI dashboards,
      segmentation analysis,
      and funnel reporting systems
      supporting revenue optimization opportunities.`;

    /* PROJECT 4 */

    projectParagraphs[6].innerHTML =
      `Designed modern analytics engineering workflows
      inspired by scalable medallion architectures.`;

    projectParagraphs[7].innerHTML =
      `Focused on lineage tracking,
      modular SQL transformations,
      testing workflows,
      and scalable analytics engineering practices.`;

    /* BUTTONS */

    document.querySelectorAll(".project-links a")
    .forEach((btn) => {

      if(btn.innerHTML.includes("Case Study")){

        btn.innerHTML =
          "View Case Study";
      }

      if(btn.innerHTML.includes("Dashboard")){

        btn.innerHTML =
          "Live Dashboard";
      }

    });

    /* EXPERIENCE */

    document.querySelector(".experience .section-label").innerHTML =
      "EXPERIENCE";

    const timelineRoles =
      document.querySelectorAll(".timeline-role");

    timelineRoles[0].innerHTML =
      `Performance Marketing &
      Analytics Analyst`;

    timelineRoles[1].innerHTML =
      "Web & Analytics Developer";

    timelineRoles[2].innerHTML =
      "Analytics & Marketing Intern";

    const timelineDescriptions =
      document.querySelectorAll(".timeline-description");

    timelineDescriptions[0].innerHTML =
      `Managed multi-channel campaign analytics,
      conversion funnels,
      segmentation,
      forecasting,
      and KPI reporting across high-volume digital campaigns.

      Built SQL-based reporting systems to identify drop-offs,
      improve ROI,
      support budget decisions,
      and optimize user acquisition performance through experimentation and behavioral analysis.`;

    timelineDescriptions[1].innerHTML =
      `Built analytics tracking systems and reporting workflows
      for an LMS platform serving thousands of learners.

      Improved engagement tracking,
      reduced bounce rates,
      optimized website performance,
      and supported enrollment analysis through dashboard systems and user behavior monitoring.`;

    timelineDescriptions[2].innerHTML =
      `Supported analytics,
      CRM workflows,
      and campaign performance tracking
      across social and web campaigns.

      Worked with HubSpot and Bitrix24 to monitor engagement,
      traffic,
      conversions,
      customer response metrics,
      and optimization opportunities for multiple client campaigns.`;

    /* CONTACT */

    document.querySelector(".contact h2").innerHTML =
      "Let’s build something meaningful with data.";

    /* FOOTER */

    document.querySelector(".footer-left span").innerHTML =
      "Data Analyst · Germany";

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
      `Ein Data Analyst aus Deutschland
      mit Fokus auf Prognosen,
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
      "Analyse & BI";

    document.getElementById("skillTitle2").innerHTML =
      "Visualisierung & Reporting";

    document.getElementById("skillTitle3").innerHTML =
      "Datenengineering";

    document.getElementById("skillTitle4").innerHTML =
      "Produkt & Workflow";

    /* STATS */

    document.querySelector(".stats .section-label").innerHTML =
      "ANALYTICS EINFLUSS";

    const statCards =
      document.querySelectorAll(".stat-card p");

    statCards[0].innerHTML =
      "GTFS Datensätze verarbeitet";

    statCards[1].innerHTML =
      "Jobanzeigen analysiert";

    statCards[2].innerHTML =
      "E-Commerce Transaktionen";

    statCards[3].innerHTML =
      "Dashboards erstellt";

    /* PROJECT LABEL */

    document.querySelector(".projects .section-label").innerHTML =
      "AUSGEWÄHLTE PROJEKTE";

    /* PROJECT TITLES */

    const projectTitles =
      document.querySelectorAll(".project-heading h3");

    projectTitles[0].innerHTML =
      `Transportnetz Analyse &
      Optimierungssystem`;

    projectTitles[1].innerHTML =
      `Analyse des Deutschen
      Datenjobmarkts`;

    projectTitles[2].innerHTML =
      `E-Commerce
      Verkaufsanalyse`;

    projectTitles[3].innerHTML =
      `Moderne Datenpipeline
      Architektur`;

    /* STACKS */

    const projectStacks =
      document.querySelectorAll(".project-stack");

    projectStacks[0].innerHTML =
      "Python · SQL · Tableau · Prognosen · NetworkX";

    projectStacks[1].innerHTML =
      "Python · Pandas · NumPy · Matplotlib · SQL";

    projectStacks[2].innerHTML =
      "SQL · BigQuery · Looker Studio · Funnel Analyse";

    projectStacks[3].innerHTML =
      "dbt · Databricks · SQL · ETL · Datenmodellierung";

    /* PROJECT DESCRIPTIONS */

    const projectParagraphs =
      document.querySelectorAll(".project-content p:not(.project-stack)");

    /* PROJECT 1 */

    projectParagraphs[0].innerHTML =
      `Analyse von über 34 Millionen GTFS-Datensätzen
      zur Untersuchung von Verkehrsverhalten,
      Verspätungen,
      Engpässen
      und Netzwerkeffizienz.`;

    projectParagraphs[1].innerHTML =
      `Entwicklung von Prognosemodellen
      und Analysesystemen
      zur Untersuchung von Stoßzeiten
      und Optimierungsmöglichkeiten.`;

    /* PROJECT 2 */

    projectParagraphs[2].innerHTML =
      `Analyse von über 50.000 Stellenanzeigen
      zur Untersuchung von SQL-Nachfrage,
      Python,
      BI-Tools
      und Gehaltsentwicklungen in Deutschland.`;

    projectParagraphs[3].innerHTML =
      `Entwicklung automatisierter Datenpipelines,
      Marktsegmentierung
      und Prognoseanalysen.`;

    /* PROJECT 3 */

    projectParagraphs[4].innerHTML =
      `Analyse von über 1 Million Transaktionen
      zur Untersuchung von Kundenverhalten,
      Kaufabbrüchen,
      Umsatztreibern
      und Einkaufsmustern.`;

    projectParagraphs[5].innerHTML =
      `Entwicklung von KPI-Dashboards,
      Segmentierungsanalysen
      und Funnel-Reporting-Systemen
      zur Umsatzoptimierung.`;

    /* PROJECT 4 */

    projectParagraphs[6].innerHTML =
      `Entwicklung moderner Analytics-Engineering Workflows
      basierend auf skalierbaren Medallion-Architekturen.`;

    projectParagraphs[7].innerHTML =
      `Fokus auf Lineage Tracking,
      modulare SQL-Transformationen,
      Testing Workflows
      und skalierbare Datenmodellierung.`;

    /* BUTTONS */

    document.querySelectorAll(".project-links a")
    .forEach((btn) => {

      if(btn.innerHTML.includes("View Case Study")){

        btn.innerHTML =
          "Case Study";
      }

      if(btn.innerHTML.includes("Live Dashboard")){

        btn.innerHTML =
          "Dashboard";
      }

    });

    /* EXPERIENCE */

    document.querySelector(".experience .section-label").innerHTML =
      "ERFAHRUNG";

    const timelineRoles =
      document.querySelectorAll(".timeline-role");

    timelineRoles[0].innerHTML =
      `Performance Marketing &
      Analytics Analyst`;

    timelineRoles[1].innerHTML =
      "Web & Analytics Entwickler";

    timelineRoles[2].innerHTML =
      "Analytics & Marketing Praktikant";

    const timelineDescriptions =
      document.querySelectorAll(".timeline-description");

    timelineDescriptions[0].innerHTML =
      `Analyse von Marketingkampagnen,
      Funnel-Systemen,
      Segmentierung,
      Forecasting
      und KPI-Reporting für digitale Kampagnen.

      Entwicklung SQL-basierter Reporting-Systeme
      zur Verbesserung von ROI,
      Nutzergewinnung
      und Performanceoptimierung.`;

    timelineDescriptions[1].innerHTML =
      `Entwicklung von Analytics Tracking-Systemen
      und Reporting-Workflows
      für eine LMS-Plattform mit tausenden Nutzern.

      Verbesserung von Engagement,
      Website-Performance,
      Bounce Rate
      und Nutzeranalyse.`;

    timelineDescriptions[2].innerHTML =
      `Unterstützung von Analytics,
      CRM-Workflows
      und Kampagnen-Tracking
      für Social- und Webkampagnen.

      Arbeit mit HubSpot und Bitrix24
      zur Analyse von Engagement,
      Traffic,
      Conversions
      und Kampagnenperformance.`;

    /* CONTACT */

    document.querySelector(".contact h2").innerHTML =
      "Lass uns etwas Sinnvolles mit Daten entwickeln.";

    /* FOOTER */

    document.querySelector(".footer-left span").innerHTML =
      "Data Analyst · Deutschland";

  }

}

/* =========================
   INITIAL LOAD
========================= */

window.addEventListener("load", () => {

  revealSections();

});
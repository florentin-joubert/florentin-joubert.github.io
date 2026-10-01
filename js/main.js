// =============================================================
// 1. Année automatique dans le footer
// =============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// =============================================================
// 2. Menu mobile (ouvre/ferme la sidebar en petit écran)
// =============================================================
const navToggle = document.getElementById("nav-toggle");
const sidebar = document.getElementById("sidebar");

navToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Ferme le menu mobile quand on clique un lien
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => sidebar.classList.remove("open"));
});

// =============================================================
// 3. Lien actif selon la section visible (scrollspy simple)
// =============================================================
const sections = document.querySelectorAll(".section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

// =============================================================
// 4. Thème clair / sombre (mémorisé dans localStorage)
// =============================================================
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Au chargement : theme déjà choisi, sinon préférence système
const savedTheme = localStorage.getItem("theme")
  || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// =============================================================
// 5. Français / Anglais
// -------------------------------------------------------------
// Ajoute une clé ici pour chaque texte à traduire, puis mets
// l'attribut data-i18n="ta_cle" sur l'élément HTML correspondant.
// =============================================================
const translations = {
  fr: {
    role: "Étudiant·e ingénieur·e",
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_mobility: "Mobilité",
    nav_civic: "Engagement",
    nav_sports: "Sports",
    cv_label: "CV (FR)",
    hero_kicker: "ENSEEIHT · 3EA",
    hero_line1: "Ingénieur·e en formation,",
    hero_line2: "curieux·se par nature.",
    hero_text: "Je rassemble ici mes projets techniques, mes expériences à l'international, mon engagement associatif et ma pratique sportive. Bonne visite.",
    hero_cta: "Voir mes projets ↓",
    projects_title: "Projets",
    mobility_title: "Mobilité internationale",
    civic_title: "Engagement civique",
    sports_title: "Sports"
  },
  en: {
    role: "Engineering student",
    nav_home: "Home",
    nav_projects: "Projects",
    nav_mobility: "Mobility",
    nav_civic: "Civic",
    nav_sports: "Sports",
    cv_label: "CV (EN)",
    hero_kicker: "ENSEEIHT · 3EA",
    hero_line1: "Engineer in training,",
    hero_line2: "curious by nature.",
    hero_text: "Here you'll find my technical projects, international experience, civic engagement and sports practice. Enjoy your visit.",
    hero_cta: "See my projects ↓",
    projects_title: "Projects",
    mobility_title: "International mobility",
    civic_title: "Civic engagement",
    sports_title: "Sports"
  }
};

const langToggle = document.getElementById("lang-toggle");
const cvLink = document.getElementById("cv-link");

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  langToggle.textContent = lang === "fr" ? "EN" : "FR"; // affiche la langue vers laquelle basculer
  cvLink.href = lang === "fr" ? "assets/cv/cv-fr.pdf" : "assets/cv/cv-en.pdf";
  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "fr";
applyLang(savedLang);

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "fr" ? "en" : "fr";
  applyLang(current);
});

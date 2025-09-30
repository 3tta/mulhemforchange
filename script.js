// Modern language toggle switch with animated flag

const jordanFlagSvg = `
<svg viewBox="0 0 28 28" width="28" height="28">
  <circle fill="#fff" cx="14" cy="14" r="14"/>
  <path d="M2 14a12 12 0 0 1 24 0" fill="#36923f"/>
  <path d="M2 14a12 12 0 0 0 24 0" fill="#000"/>
  <path d="M2 14l12-9.6v19.2z" fill="#d62327"/>
  <polygon points="8.5,14 9.7,14.44 8.88,15.52 8.98,14.27 9.96,13.87 8.91,13.94 8.5,12.92 8.5,13.99 7.47,13.93 8.42,14.27 8.5,14"
    fill="#fff"/>
</svg>
`;

const ukFlagSvg = `
<svg viewBox="0 0 28 28" width="28" height="28">
  <g>
    <circle fill="#f0f0f0" cx="14" cy="14" r="14"/>
    <path d="M27.8 19.5l-8.32-4.8V26.3c3.12-.6 5.76-2.55 7.25-5.36zm-.58-10.6A13.96 13.96 0 0 0 19.5.2l-4.8 8.32h12.52zM8.5.2A13.96 13.96 0 0 0 1.2 8.5h12.52zM.2 19.5A13.96 13.96 0 0 0 8.5 27.8l4.8-8.32H.2zm11.78 8.32l4.8-8.32H8.5l4.8 8.32zM26.3 8.5l-8.32 4.8h12.52A13.96 13.96 0 0 0 26.3 8.5zm-21.6 11.2l8.32-4.8H1.3c.32.95.72 1.85 1.4 2.64zM14 1.4A12.6 12.6 0 1 1 1.4 14 12.614 12.614 0 0 1 14 1.4zm0 2.8A9.8 9.8 0 1 0 23.8 14 9.81 9.81 0 0 0 14 4.2z" fill="#0052b4"/>
    <path d="M14 14l12.52-4.8A13.96 13.96 0 0 1 27.8 19.5zM14 14l-12.52 4.8A13.96 13.96 0 0 1 .2 8.5zM14 14l-4.8 8.32A13.96 13.96 0 0 1 8.5.2zM14 14l4.8-8.32A13.96 13.96 0 0 1 19.5 27.8z" fill="#d80027"/>
    <path d="M14 14l12.52 4.8A13.96 13.96 0 0 1 19.5 27.8zM14 14L1.48 9.2A13.96 13.96 0 0 1 8.5.2zM14 14l-8.32-4.8A13.96 13.96 0 0 1 1.48 19.5zM14 14l8.32 4.8A13.96 13.96 0 0 1 19.5.2z" fill="#f0f0f0"/>
  </g>
</svg>
`;

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_events: "فعالياتنا",
    nav_contact: "تواصل معنا",
    soon: "قريبًا",
    home_text: "موقعنا قيد الإنشاء، تابعونا لتكونوا أول من يعلم.",
    about_title: "من نحن",
    about_text: "ملهم للتغيير، هو فريق تطوعي شبابي يعمل على تمكين الأفراد، رفع الوعي، وتنمية المهارات من خلال ورش تفاعلية وأنشطة هادفة تلامس الواقع وتزيد الأثر فينا.",
    events_title: "فعالياتنا",
    events_text: "قريبًا ستعرض فعالياتنا.",
    contact_title: "تواصل معنا",
    copyright: "&copy; 2025 Mulhem for Change. جميع الحقوق محفوظة."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_events: "Events",
    nav_contact: "Contact Us",
    soon: "Coming Soon",
    home_text: "Our website is under construction. Follow us to be the first to know.",
    about_title: "About Us",
    about_text: "Mulhem for Change is a youth volunteer team that works to empower individuals, raise awareness, and develop skills through interactive workshops and purposeful activities that resonate with reality and amplify our impact.",
    events_title: "Our Events",
    events_text: "Our events will be listed soon.",
    contact_title: "Contact Us",
    copyright: "&copy; 2025 Mulhem for Change. All rights reserved."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  // Update switcher flag and label styles
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const flagSpan = document.getElementById('langFlag');
  langSwitchBtn.classList.toggle('active-ar', lang === "ar");
  flagSpan.innerHTML = lang === "ar" ? jordanFlagSvg : ukFlagSvg;
}

// Accessibility: allow Space/Enter to toggle
function setupLangSwitchAccessibility(btn, handler) {
  btn.addEventListener('keydown', function(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handler();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.navbar ul');
  if (menuToggleBtn && menu) {
    menuToggleBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
      menuToggleBtn.setAttribute('aria-expanded', menu.classList.contains('show') ? 'true' : 'false');
      document.body.classList.toggle('menu-open', menu.classList.contains('show'));
    });
  }

  // Language switch toggle
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  let currentLang = document.documentElement.lang === "en" ? "en" : "ar";
  function toggleLang() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    setLanguage(currentLang);
  }
  langSwitchBtn.addEventListener('click', toggleLang);
  setupLangSwitchAccessibility(langSwitchBtn, toggleLang);

  // Set initial state
  setLanguage(currentLang);
});

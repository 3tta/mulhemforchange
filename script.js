// Jordan flag SVG string
const jordanFlagSvg = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <circle fill="#fff" cx="12" cy="12" r="12"/>
  <path d="M2 12a10 10 0 0 1 20 0" fill="#36923f"/>
  <path d="M2 12a10 10 0 0 0 20 0" fill="#000"/>
  <path d="M2 12l10-8v16z" fill="#d62327"/>
  <polygon points="7.15,12 8.23,12.38 7.49,13.24 7.57,12.22 8.44,11.85 7.51,11.91 7.15,10.96 7.15,11.99 6.2,11.92 7.09,12.22 7.15,12" fill="#fff"/>
</svg>
`;
// UK flag SVG string (same as in HTML)
const ukFlagSvg = `
<svg width="24" height="24" viewBox="0 0 24 24"><g><circle fill="#f0f0f0" cx="12" cy="12" r="12"/><path d="M23.254 16.695l-7.14-4.132V21.3c2.675-.518 4.936-2.182 6.302-4.605zm-.508-9.086A11.974 11.974 0 0 0 16.695.746l-4.132 7.14h10.737zM7.305.746A11.974 11.974 0 0 0 1.254 7.609h10.737zM.746 16.695A11.974 11.974 0 0 0 7.609 22.746l4.132-7.14H.746zm10.119 7.14l4.132-7.14H7.305l4.132 7.14zM21.3 7.305l-7.14 4.132h10.737A11.974 11.974 0 0 0 21.3 7.305zm-18.6 9.39l7.14-4.132H.803c.27.821.617 1.602 1.097 2.343zM12 1.2A10.8 10.8 0 1 1 1.2 12 10.813 10.813 0 0 1 12 1.2zm0 2.4A8.4 8.4 0 1 0 20.4 12 8.413 8.413 0 0 0 12 3.6z" fill="#0052b4"/><path d="M12 12l10.737-4.132A11.974 11.974 0 0 1 23.254 16.695zM12 12l-10.737 4.132A11.974 11.974 0 0 1 .746 7.305zM12 12l-4.132 7.14A11.974 11.974 0 0 1 7.305.746zM12 12l4.132-7.14A11.974 11.974 0 0 1 16.695 22.746z" fill="#d80027"/><path d="M12 12l10.737 4.132A11.974 11.974 0 0 1 16.695 23.254zM12 12L1.263 7.868A11.974 11.974 0 0 1 7.305.746zM12 12l-7.14-4.132A11.974 11.974 0 0 1 1.263 16.695zM12 12l7.14 4.132A11.974 11.974 0 0 1 16.695.746z" fill="#f0f0f0"/></g></svg>
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
  langSwitchBtn.querySelector('.en-label').classList.toggle('active', lang === "en");
  langSwitchBtn.querySelector('.ar-label').classList.toggle('active', lang === "ar");
  flagSpan.innerHTML = lang === "ar" ? jordanFlagSvg : ukFlagSvg;
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

  // Language switch
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  let currentLang = document.documentElement.lang === "en" ? "en" : "ar";
  langSwitchBtn.addEventListener('click', function () {
    currentLang = currentLang === "ar" ? "en" : "ar";
    setLanguage(currentLang);
  });

  setLanguage(currentLang);
});

// Language dictionary
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_events: "فعالياتنا",
    nav_contact: "تواصل معنا",
    soon: "قريبًا",
    home_text: "موقعنا قيد الإنشاء، تابعونا لتكونوا أول من يعلم.",
    about_title: "من نحن",
    about_text: "مبادرة تطوعية تهدف لنشر الخير والتغيير الإيجابي.",
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
    about_text: "A volunteer initiative aiming to spread kindness and positive change.",
    events_title: "Our Events",
    events_text: "Our events will be listed soon.",
    contact_title: "Contact Us",
    copyright: "&copy; 2025 Mulhem for Change. All rights reserved."
  }
};

function setLanguage(lang) {
  // Set html lang and dir
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  // Swap text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  // Swap nav alignment and language switch (for better UX)
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  if(lang === "ar") {
    langSwitchBtn.innerHTML = '<span>ع</span><span style="margin: 0 4px;">/</span><span>EN</span>';
  } else {
    langSwitchBtn.innerHTML = '<span>EN</span><span style="margin: 0 4px;">/</span><span>ع</span>';
  }
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

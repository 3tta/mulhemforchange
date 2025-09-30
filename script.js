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
  // Swap font if needed, or add font-family for English if you want
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

  // Language toggle
  const langToggleBtn = document.getElementById('langToggleBtn');
  let currentLang = document.documentElement.lang === "en" ? "en" : "ar";
  langToggleBtn.addEventListener('click', function () {
    currentLang = currentLang === "ar" ? "en" : "ar";
    setLanguage(currentLang);
  });

  // Set initial language
  setLanguage(currentLang);
});

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu for mobile
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.navbar ul');
  if (menuToggleBtn && menu) {
    menuToggleBtn.addEventListener('click', () => {
      menu.classList.toggle('show');
      menuToggleBtn.setAttribute('aria-expanded', menu.classList.contains('show') ? 'true' : 'false');
      document.body.classList.toggle('menu-open', menu.classList.contains('show'));
    });
    // Close menu when a link is clicked (optional for better UX)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
          menu.classList.remove('show');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    });
  }
});

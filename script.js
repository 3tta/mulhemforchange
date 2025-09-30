document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu functionality
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.navbar ul');

  if (menuToggleBtn && menu) {
    menuToggleBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
      menuToggleBtn.classList.toggle('active');
      menuToggleBtn.setAttribute(
        'aria-expanded',
        menu.classList.contains('show') ? 'true' : 'false'
      );
      document.body.classList.toggle('menu-open', menu.classList.contains('show'));
    });

    // Close menu when clicking outside in mobile
    document.addEventListener('click', function (e) {
      if (
        menu.classList.contains('show') &&
        !menu.contains(e.target) &&
        !menuToggleBtn.contains(e.target)
      ) {
        menu.classList.remove('show');
        menuToggleBtn.classList.remove('active');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });

    // Close menu on nav click (mobile)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth < 900) {
          menu.classList.remove('show');
          menuToggleBtn.classList.remove('active');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.navbar ul');
  if (menuToggleBtn && menu) {
    menuToggleBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
      menuToggleBtn.setAttribute('aria-expanded', menu.classList.contains('show') ? 'true' : 'false');
      document.body.classList.toggle('menu-open', menu.classList.contains('show'));
    });
  }
});

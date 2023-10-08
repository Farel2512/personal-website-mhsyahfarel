document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarList = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
  });
});

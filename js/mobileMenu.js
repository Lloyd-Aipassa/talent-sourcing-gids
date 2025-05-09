document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('mobileMenuToggle');
  const closeButton = document.getElementById('mobileMenuClose');
  const nav = document.getElementById('mobileNav');
  const overlay = document.querySelector('.overlay');
  nav.style.transition = 'transform 0.5s ease-in-out';

  openButton.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    nav.style.transform = 'translateX(-100%)';
    overlay.style.display = 'none';
  });

  document.querySelectorAll('#mobileNav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.style.transform = 'translateX(-100%)';
      overlay.style.display = 'none';
      isOpen = false;
    });
  });
  
});

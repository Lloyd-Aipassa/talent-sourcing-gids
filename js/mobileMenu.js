document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mobileNav');
  nav.style.transition = 'transform 0.3s ease-in-out';

  let isOpen = false;

  toggleButton.addEventListener('click', () => {
    if (isOpen) {
      nav.style.transform = 'translateX(-100%)';
    } else {
      nav.style.transform = 'translateX(0)';
    }
    isOpen = !isOpen;
  });
});

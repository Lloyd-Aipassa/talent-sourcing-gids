window.addEventListener('scroll', function () {
  const menu = document.querySelector('.floating-menu');

  if (window.scrollY > 3559) {
    menu.classList.remove('visible-white');
    menu.classList.add('visible');
  } else if (window.scrollY > 1520) {
    menu.classList.remove('visible');
    menu.classList.add('visible-white');
  } else if (window.scrollY > 820) {
    menu.classList.remove('visible-white');
    menu.classList.add('visible');
  } else {
    menu.classList.remove('visible', 'visible-white');
  }
});

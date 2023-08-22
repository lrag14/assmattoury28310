document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.scroll-animation');

  function checkScroll() {
    sections.forEach((section) => {
      const isInViewport =
        section.getBoundingClientRect().top < window.innerHeight / 1.5;

      if (isInViewport) {
        section.classList.add('appear');
      } else {
        section.classList.remove('appear');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Vérifie au chargement de la page
});

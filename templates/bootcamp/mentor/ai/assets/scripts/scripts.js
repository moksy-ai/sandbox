 AOS.init();document.addEventListener('DOMContentLoaded', function () {

  // Apply default animation (with override)
  document.querySelectorAll('section').forEach(el => {
    const animation = el.dataset.aos || 'fade-down';
    el.setAttribute('data-aos', animation);
  });

  // Init AOS
  AOS.init({
    duration: 1000,
    once: false  
  });

});
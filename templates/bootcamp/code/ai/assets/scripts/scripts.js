 // Animate on Scroll
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

 // Scroll to top
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTop");
  const progressCircle = scrollBtn.querySelector(".progress");

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  function updateScrollProgress() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight <= 0) {
      progressCircle.style.strokeDashoffset = circumference;
      scrollBtn.classList.remove("active");
      return;
    }

    const progress = scrollTop / scrollHeight;
    const dashOffset = circumference - (progress * circumference);

    progressCircle.style.strokeDashoffset = dashOffset;

    if (scrollTop > 200) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  }

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("resize", updateScrollProgress);

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  updateScrollProgress();
});

 // Scroll Progress
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scroll / height) * 100;

  progressBar.style.height = progress + "%";
});

    $('.carousel').carousel()

const MIN_PRELOADER_TIME = 1000;
  const preloaderStartTime = Date.now();

  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    const elapsedTime = Date.now() - preloaderStartTime;
    const remainingTime = Math.max(MIN_PRELOADER_TIME - elapsedTime, 0);

    setTimeout(function () {
      preloader.classList.add("hide");

      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
    }, remainingTime);
  });
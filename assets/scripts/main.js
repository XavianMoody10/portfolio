"use strict";

function toggleMobileMenu() {
  const openIcon = document.querySelector(".header-open-icon");
  const closeIcon = document.querySelector(".header-close-icon");
  const navigation = document.querySelector(".navigation");

  openIcon.addEventListener("click", () => {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navigation.style.transform = "translateX(0)";
  });

  closeIcon.addEventListener("click", () => {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navigation.style.transform = "translateX(-100%)";
  });
}

function heroSection() {
  const hero = document.querySelector(".hero");
  const work = document.querySelector(".work");
  const arrow = document.querySelector(".down-arrow");

  arrow.addEventListener("click", () => {
    hero.classList.remove("drop-down-enter");
    hero.classList.add("drop-down-exit");

    work.scrollIntoView();
  });
}

function sectionsTransition() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let options = { threshold: 0.3 };

    function callback(entries, observer) {
      [...entries].forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("drop-down-enter");
          entry.target.classList.remove("drop-down-exit");
        } else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("drop-down-enter");
          entry.target.classList.add("drop-down-exit");
        }
      });
      observer.disconnect();
    }

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  });
}

toggleMobileMenu();
heroSection();
sectionsTransition();

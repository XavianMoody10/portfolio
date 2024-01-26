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

function heroSectionTransition() {
  const arrow = document.querySelector(".down-arrow");
  const nextSection = document.querySelector(".work");
  const currentSection = document.querySelector(".hero");
  const introduction = document.querySelector(".introduction");
  const summary = document.querySelector(".summary");

  window.addEventListener("scroll", () => {
    let options = { threshold: 0.3 };

    function callback(entries) {
      [...entries].forEach((entry) => {
        if (entry.isIntersecting) {
          introduction.style.animationDelay = "0.5s";
          introduction.classList.add("drop-down-enter");
          introduction.classList.remove("drop-down-exit");

          summary.style.animationDelay = "0.5s";
          summary.classList.add("drop-down-enter");
          summary.classList.remove("drop-down-exit");

          arrow.style.animationDelay = "0.5s";
          arrow.classList.add("drop-down-enter");
          arrow.classList.remove("drop-down-exit");
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(currentSection);
  });

  arrow.addEventListener("click", () => {
    introduction.style.animationDelay = "0s";
    introduction.classList.remove("drop-down-enter");
    introduction.classList.add("drop-down-exit");

    summary.style.animationDelay = "0s";
    summary.classList.remove("drop-down-enter");
    summary.classList.add("drop-down-exit");

    arrow.style.animationDelay = "0.5s";
    arrow.classList.remove("drop-down-enter");
    arrow.classList.add("drop-down-exit");

    setTimeout(() => {
      nextSection.scrollIntoView();
    }, 1500);
  });
}

function workSectionTransition() {
  const currentSection = document.querySelector(".work");

  window.addEventListener("scroll", () => {
    let options = { threshold: 0.3 };

    function callback(entries) {
      [...entries].forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("drop-down-enter");
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(currentSection);
  });
}

heroSectionTransition();
workSectionTransition();
toggleMobileMenu();

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

function sectionTransition() {
  const arrow = document.querySelector(".down-arrow");
  const section = document.querySelector(".work");
  const introduction = document.querySelector(".introduction");
  const summary = document.querySelector(".summary");

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
      section.scrollIntoView();
    }, 1500);
  });
}

sectionTransition();
toggleMobileMenu();

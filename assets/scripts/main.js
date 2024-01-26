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

toggleMobileMenu();

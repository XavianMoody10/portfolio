"use strict";
import data from "./data.js";

const headerFunctionality = () => {
  const openIcon = document.querySelector(".header-open-icon");
  const closeIcon = document.querySelector(".header-close-icon");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation__item");
  let isOpen = false;

  const toggleHeaderIcons = () => {
    const hiddenClass = "hidden";
    openIcon.classList.toggle(hiddenClass);
    closeIcon.classList.toggle(hiddenClass);
  };

  const toggleNavigationAnimation = () => {
    const classList = navigation.classList;

    if (
      !classList.contains("navigation--open") &&
      !classList.contains("navigation--close")
    ) {
      navigation.classList.add("navigation--open");
    } else if (!isOpen) {
      navigation.classList.toggle("navigation--open");
      navigation.classList.toggle("navigation--close");
    } else {
      navigation.classList.toggle("navigation--open");
      navigation.classList.toggle("navigation--close");
    }
  };

  const toggleAnchorsAnimation = () => {
    if (isOpen) {
      setTimeout(() => {
        navigationItems.forEach((link, index) => {
          link.classList.toggle("anchor--open");
          link.style.animationDelay = `${index * 0.2}s`;
        });
      }, 500);
    } else {
      navigationItems.forEach((link) => {
        link.classList.toggle("anchor--open");
        link.classList.toggle("anchor--close");
        link.style.animationDelay = `0s`;
      });
    }
  };

  openIcon.addEventListener("click", () => {
    isOpen = !isOpen;

    toggleHeaderIcons();
    toggleNavigationAnimation();
    toggleAnchorsAnimation();
  });

  closeIcon.addEventListener("click", () => {
    isOpen = !isOpen;

    toggleHeaderIcons();
    toggleNavigationAnimation();
    toggleAnchorsAnimation();
  });
};

function loadProjects() {
  const projectsContainer = document.querySelector(".projects");

  data.forEach(({ projectName, liveLink, sourceLink }) => {
    const projectEl = `<div class="project">
    <div class="project__overlay">
      <p class="project__name">${projectName}</p>
      <div class="project__icons">
        <a class="project__icon" href="${sourceLink}" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a class="project__icon" href="${liveLink}" target="_blank"
          ><i class="fa-solid fa-laptop"></i
        ></a>
      </div>
    </div>
  </div>`;

    projectsContainer.insertAdjacentHTML("beforeend", projectEl);
  });

  function addBackgoundImages() {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
      project.style.backgroundImage = `url(assets/images/${data[index].backgroundImage})`;
    });
  }

  addBackgoundImages();
}

loadProjects();
headerFunctionality();

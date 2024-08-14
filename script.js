"use strict";

const toggleButton = document.querySelector(".toggle-btn");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const toggleIcon = toggleButton.firstElementChild;

toggleButton.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  if (!navbar.classList.contains("toggle")) {
    navbar.classList.add("toggle");
    body.style.overflow = "hidden";
    toggleIcon.src = "images/icon-close.svg";
  } else {
    navbar.classList.remove("toggle");
    body.style.overflow = "auto";
    toggleIcon.src = "images/icon-hamburger.svg";
  }
}

window.addEventListener("load", function () {
  document.querySelector("h1").classList.add("fade-in-left-loaded");
  document.querySelector("header").classList.add("fade-in-top");
});

// Animation ON Scroll

const container = document.querySelectorAll(".container");

function handleContainerIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-bottom");
      observer.unobserve(entry.target);
    }
  });
}

const containerObserver = new IntersectionObserver(
  handleContainerIntersection,
  {
    threshold: 0.1,
  }
);

container.forEach((el) => {
  containerObserver.observe(el);
});

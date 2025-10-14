// JavaScript Document


console.log("HOI")

let menuButton = document.querySelector("nav button:first-of-type");

let theMenu = document.querySelector("header nav ul");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  theMenu.classList.toggle("is-open");
  menuButton.classList.toggle("show-close-icon");

}



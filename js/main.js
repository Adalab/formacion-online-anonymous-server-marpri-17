'use strict';

const buttonOpenMenu = document.querySelector(".nav-trigger");
const buttonCloseMenu = document.querySelector(".nav-close");

buttonCloseMenu.classList.add("js-hidden");
buttonCloseMenu.innerHTML = "";
buttonOpenMenu.innerHTML = "";

const menuNav = document.querySelector(".nav");
menuNav.classList.add("js-hidden")


function toggleMenu() {
    menuNav.classList.toggle("js-hidden");
    buttonCloseMenu.classList.toggle("js-hidden");
}

buttonOpenMenu.addEventListener("click", toggleMenu);
buttonCloseMenu.addEventListener("click", toggleMenu)
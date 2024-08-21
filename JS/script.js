"use strict";
/***************HTML ELEMENTS***************/

let navBar = document.querySelector("nav");
let navBtn = document.querySelector("button.t-dash");
let closeBtn = document.querySelector("button.x-but");
let navLinks = document.querySelectorAll("nav a");

/***************EVENTS***************/
navBtn.addEventListener("click", function () {
  navBar.classList.add("open");
});
closeBtn.addEventListener("click", function () {
  navBar.classList.remove("open");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (navBar.classList.contains("open")) {
      navBar.classList.remove("open");
    }
  });
}

"use strict";
/***************HTML ELEMENTS***************/

let navBar = document.querySelector("nav");
let navBtn = document.querySelector("button.t-dash");
let closeBtn = document.querySelector("button.x-but");
/***************UTILITIES***************/
function navBarHover(e) {
  if (e.target.getAttribute("href")) {
    let allLinks = e.target.closest(".links").querySelectorAll("a");
    console.log(allLinks, e.target);

    let logo = document.querySelector(".logo");
    allLinks.forEach((link) => {
      if (link !== e.target) link.style.opacity = `${this}`;
      logo.style.opacity = `${this}`;
      if (!e.target.closest(".try-but"))
        document.querySelector(".try-but").style.opacity = `${this}`;
    });
  }
}

/***************EVENTS***************/
navBtn.addEventListener("click", function () {
  navBar.classList.add("open");
});
closeBtn.addEventListener("click", function () {
  navBar.classList.remove("open");
});

navBar.addEventListener("mouseover", navBarHover.bind(0.5));
navBar.addEventListener("mouseout", navBarHover.bind(1));
navBar.addEventListener("click", function (e) {
  e.target.getAttribute("href")
    ? navBar.classList.contains("open") && navBar.classList.remove("open")
    : "";
});

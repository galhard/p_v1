"use strict";
//VARIABLES
const fold2021 = document.querySelector(".fold2021");
const unfold2021 = document.querySelector(".unfold2021");
const hideQ4_2021 = document.querySelectorAll(".hide_q4-2021");
const foldQ1_2022 = document.querySelector(".fold_q1-2022");
const unfoldQ1_2022 = document.querySelector(".unfold_q1-2022");
const hideQ1_2022 = document.querySelectorAll(".hide_q1-2022");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".nav__link");

//Scrolling to Sections
for (const section of navLinks) {
  section.addEventListener("click", function () {
    let content = section.textContent;
    let test = document.getElementById(content);
    test.scrollIntoView();
    console.log(content);
  });
}

// ROADMAP FOLD & UNFOLD FUNCTIONS
const roadmapUnfold = function (unfold, fold, hide) {
  unfold.addEventListener("click", function () {
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = "block";
      fold.style.display = "block";
      unfold.style.display = "none";
    }
  });
};
const roadmapFold = function (unfold, fold, hide) {
  fold.addEventListener("click", function () {
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = "none";
      fold.style.display = "none";
      unfold.style.display = "block";
    }
  });
};

roadmapUnfold(unfold2021, fold2021, hideQ4_2021);
roadmapFold(unfold2021, fold2021, hideQ4_2021);
roadmapUnfold(unfoldQ1_2022, foldQ1_2022, hideQ1_2022);
roadmapFold(unfoldQ1_2022, foldQ1_2022, hideQ1_2022);

//MEDIA QUERIES

window.addEventListener("resize", function () {
  //NAVIGATION UNDER 500px
  if (window.innerWidth <= 500) {
    nav.classList.add("hidden");
    menu.addEventListener("click", function () {
      nav.classList.remove("hidden");
    });
    for (const navLink of navLinks) {
      navLink.addEventListener("click", function () {
        nav.classList.add("hidden");
      });
    }
  }
  //NAVIGATION BELOW 500px
  if (window.innerWidth > 500) {
    nav.classList.remove("hidden");
  }
});

"use strict";

var openMenuButton = document.querySelector("#openMenu");
var closeMenuButton = document.querySelector("#closeMenu");
var sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  openMenuButton.onclick = function () {
    sideMenu.style.display = "block";
    setTimeout(function () {
      sideMenu.style.right = "0";
    }, 100);
  };
}

openMenu();

function closeMenu() {
  closeMenuButton.onclick = function () {
    sideMenu.style.right = "-100%";
    setTimeout(function () {
      sideMenu.style.display = "none";
    }, 100);
  };
}

closeMenu();
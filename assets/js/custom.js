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
"use strict";

var openModalButtons = document.querySelectorAll('[data-modal-target]');
var closeModalButtons = document.querySelectorAll('[data-close-button]');
var overlay = document.getElementById('overlay');
openModalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener('click', function () {
  var modals = document.querySelectorAll('.modal.active');
  modals.forEach(function (modal) {
    closeModal(modal);
  });
});
closeModalButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
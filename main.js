"use strict";

document.addEventListener("DOMContentLoaded", init);

let radioControls = document.querySelectorAll(".radio-control");
let selectedRating;

function init() {
  radioControls.forEach((el) => {
    el.addEventListener("click", ratingSelected);
  });

  document.querySelector("button").addEventListener("click", submit);
}

function ratingSelected(e) {
  e.preventDefault();
  clearSelected();
  let elId;
  if (e.target.tagName == "LABEL") {
    elId = e.target.parentElement;
  } else {
    elId = e.target;
  }
  selectedRating = elId.querySelector("input[name='rating']").id;
  document.querySelector("#selected-rating").innerHTML = selectedRating;
  radioControls[selectedRating - 1].classList.add("selected");
}

function clearSelected() {
  radioControls.forEach((ctrl) => {
    ctrl.classList.remove("selected");
  });
}

function submit(e) {
  e.preventDefault();

  if (selectedRating) {
    document.querySelector("article.rating").classList.add("hidden");
    document.querySelector("article.thanks").classList.remove("hidden");
  }
}

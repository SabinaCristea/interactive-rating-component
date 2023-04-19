"use strict";

const comp1 = document.querySelector(".component-1");
const comp2 = document.querySelector(".component-2");

const ratingValue = document.querySelectorAll(".rating-value");
const submitBtn = document.querySelector(".submit-button");

const sibling2 = document.querySelector(".final-text-container");
const sibling1 = sibling2.previousElementSibling;
let lastClickedIndex = null;

const rateNumber = function () {
  for (let i = 0; i < ratingValue.length; i++) {
    ratingValue[i].addEventListener("click", function () {
      for (let j = 0; j < ratingValue.length; j++) {
        ratingValue[j].style.backgroundColor = "";
        ratingValue[j].style.color = "";
      }
      this.style.backgroundColor = "hsl(25, 97%, 53%)";
      this.style.color = "#fff";

      lastClickedIndex = i;
    });
  }
};

rateNumber();

const showRating = function () {
  comp1.classList.add("hidden");
  comp2.classList.remove("hidden");
};

submitBtn.addEventListener("click", function () {
  if (lastClickedIndex !== null) {
    const html = `<div class="value-selected-text">You selected ${
      lastClickedIndex + 1
    } out of ${ratingValue.length}</div>`;
    sibling1.insertAdjacentHTML("afterend", html);
    lastClickedIndex = null;
    showRating();
  }
});

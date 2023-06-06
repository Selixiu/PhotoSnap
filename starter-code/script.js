"use strict";
const checkbox = document.getElementById("myCheckbox");
const subscriptionCheck = document.getElementById("toggle");
const perPeriod = document.querySelectorAll(".per-period");
const menu = document.querySelector(".hamburger-menu");
const mobileUl = document.querySelector(".mobile-ul");
const bttnWrapper = document.querySelector(".bttn-wrapper");
const viewPort = window.innerWidth;
const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const businessPrice = document.querySelector(".business-price");
const yearlyPrice = document.querySelector(".yearly-p");
const monthlyPrice = document.querySelector(".montlhy-p");
let priceBasic = 19;
let pricePro = 39;
let priceBusiness = 99;

if (basicPrice) {
  function setPrice() {
    basicPrice.innerHTML = `$${priceBasic.toFixed(2)}`;
    proPrice.innerHTML = `$${pricePro.toFixed(2)}`;
    businessPrice.innerHTML = `$${priceBusiness.toFixed(2)}`;
  }
  setPrice();
  subscriptionCheck.addEventListener("click", function () {
    if (subscriptionCheck.checked) {
      basicPrice.innerHTML = `$${(priceBasic * 10).toFixed(2)}`;
      proPrice.innerHTML = `$${(pricePro * 10).toFixed(2)}`;
      businessPrice.innerHTML = `$${(priceBusiness * 10).toFixed(2)}`;

      perPeriod.forEach((elem) => (elem.innerHTML = `per year`));
    }
    if (!subscriptionCheck.checked) {
      setPrice();
      perPeriod.forEach((elem) => (elem.innerHTML = `per month`));
    }
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 800) {
    mobileUl.classList.add("hidden");
    bttnWrapper.classList.add("hidden");
  }
  if (window.innerWidth >= 800) {
    mobileUl.classList.remove("hidden");
    bttnWrapper.classList.remove("hidden");
  }
});

menu.addEventListener("click", function () {
  if (checkbox.checked) {
    mobileUl.classList.remove("hidden");
    bttnWrapper.classList.remove("hidden");
  }
  if (!checkbox.checked) {
    mobileUl.classList.add("hidden");
    bttnWrapper.classList.add("hidden");
  }
});

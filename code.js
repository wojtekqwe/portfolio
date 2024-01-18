import quatations from "./quatations.json" assert { type: "json" };
import { checkToSendForm } from "./validators.js";
import { changeMode } from "./change-mode.js";

const navbar = document.querySelector(".nav");
const btnContact = document.querySelector(".nav__contact");
const formContainer = document.querySelector(".form-container");
const iconMode = document.querySelector("#mode-icon");
const avatarContainer = document.querySelector(".header__avatar");
const btnChangeQuote = document.querySelector(".fa-arrows-rotate");
const quote = document.querySelector("#quote");
const activitiesContainers = document.querySelectorAll(".activities__activity");
const sendBtn = document.querySelector("#send-form");

// Change size all images
function changeSizeAllImages() {
  activitiesContainers.forEach((activity) => {
    activity.style.flexGrow = "0";
    activity.querySelector(".activities__description").classList.remove("show");
  });
}

// Generate ranodm quote
function generateQuote() {
  const randomNumber = Math.floor(Math.random() * quatations.length);
  const container = quote.closest(".quote-container");

  container.classList.add("load");
  setTimeout(() => {
    container.classList.remove("load");
    quote.textContent = quatations[randomNumber].quatation;
  }, 2000);
}

// Change icons color in navbar
function changeIconsColor(container) {
  container.parentElement.querySelectorAll(".icon").forEach((icon) => {
    if (icon.classList.contains("white")) {
      icon.classList.remove("white");
    } else {
      icon.classList.add("white");
    }
  });
}

// Change icon in navbar
function changeIcon(icon, hasClass) {
  const iconElement = icon.querySelector("i");
  setTimeout(() => {
    if (hasClass) {
      iconElement.classList.remove("fa-regular", "fa-address-card");
      iconElement.classList.add("fa-solid", "fa-xmark");
    } else {
      iconElement.classList.remove("fa-solid", "fa-xmark");
      iconElement.classList.add("fa-regular", "fa-address-card");
    }
    icon.classList.remove("hide");
  }, 500);
}

// Show form
function showForm() {
  const iconHasClassCard =
    this.children[0].classList.contains("fa-address-card");
  if (iconHasClassCard) {
    // Show form container
    formContainer.classList.add("active");
    changeIcon(this, iconHasClassCard);

    // Disable scroll on form
    document.body.style.overflow = "hidden";
  } else {
    // Hide form container
    formContainer.classList.remove("active");
    changeIcon(this, iconHasClassCard);

    //Enable scroll
    document.body.style.overflow = "auto";
  }

  // Hide form icon
  this.classList.add("hide");

  // Change icon color
  changeIconsColor(formContainer);
}

// Change position and color navigation after scroll
window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Event listener on buttons
avatarContainer.addEventListener("click", () => {
  setTimeout(() => {
    avatarContainer.querySelector(".elements").classList.add("show");
  }, 200);
});

activitiesContainers.forEach((activity) => {
  activity.addEventListener("click", () => {
    changeSizeAllImages();
    activity.style.flexGrow = "1";
    activity.querySelector(".activities__description").classList.add("show");
  });
});

btnChangeQuote.addEventListener("click", generateQuote);
sendBtn.addEventListener("click", checkToSendForm);
btnContact.addEventListener("click", showForm);
iconMode.addEventListener("click", changeMode);

// Set main image in section 'About me' and generate quote in load page
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#volleyball").style.flexGrow = "1";
  document
    .querySelector("#volleyball .activities__description")
    .classList.add("show");
  generateQuote();
});

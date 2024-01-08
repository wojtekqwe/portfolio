import quatations from "./quatations.json" assert { type: "json" };

const navbar = document.querySelector(".nav");
const btnContact = document.querySelector(".nav__contact");
const formContainer = document.querySelector(".form-container");

const iconMode = document.querySelector("#mode-icon");
const activitiesContainers = document.querySelectorAll(".activities__activity");
const quatote = document.querySelector("#quote");
const btnChangeQuatote = document.querySelector(".fa-arrows-rotate");
const avatarContainer = document.querySelector(".header__avatar");

// Change position and color navigation after scroll
window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

function changeIconsColor(container) {
  container.parentElement.querySelectorAll(".icon").forEach((icon) => {
    if (icon.classList.contains("white")) {
      icon.classList.remove("white");
    } else {
      icon.classList.add("white");
    }
  });
}

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

// Change mode (dark / light)
function changeMode() {
  if (iconMode.children[0].classList.contains("fa-moon")) {
    iconMode.children[0].classList.remove("fa-moon");
    iconMode.children[0].classList.add("fa-sun");
    document.body.classList.add("dark");
  } else {
    iconMode.children[0].classList.remove("fa-sun");
    iconMode.children[0].classList.add("fa-moon");
    document.body.classList.remove("dark");
  }
}

function changeSizeAllImages() {
  activitiesContainers.forEach((activity) => {
    activity.style.flexGrow = "0";
    activity.querySelector(".activities__description").classList.remove("show");
  });
}

activitiesContainers.forEach((activity) => {
  activity.addEventListener("click", () => {
    changeSizeAllImages();
    activity.style.flexGrow = "1";
    activity.querySelector(".activities__description").classList.add("show");
  });
});

function generateQuatote() {
  const randomNumber = Math.floor(Math.random() * quatations.length);
  quatote.textContent = quatations[randomNumber].quatation;
}

btnContact.addEventListener("click", showForm);

iconMode.addEventListener("click", changeMode);

avatarContainer.addEventListener("click", () => {
  setTimeout(() => {
    avatarContainer.querySelector(".elements").classList.add("show");
  }, 200);
});

btnChangeQuatote.addEventListener("click", generateQuatote);

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#volleyball").style.flexGrow = "1";
  document
    .querySelector("#volleyball .activities__description")
    .classList.add("show");
  generateQuatote();
});

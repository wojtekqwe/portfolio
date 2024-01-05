const navbar = document.querySelector(".nav");
const logoImg = document.querySelector(".nav__logo img");
const formBtn = document.querySelector(".nav__menu");
const formContainer = document.querySelector(".form-container");
const iconMode = document.querySelector("#mode-icon");
const skillsContainer = document.querySelector(".skills");

// Change position and color navigation after scroll
window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

function changeIconsColor() {
  formContainer.parentElement.querySelectorAll(".icon").forEach((icon) => {
    if (icon.classList.contains("white")) {
      icon.classList.remove("white");
    } else {
      icon.classList.add("white");
    }
  });
}

function changeIcon(icon) {
  const iconImage = icon.querySelector("i");
  setTimeout(() => {
    if (iconImage.classList.contains("fa-address-card")) {
      iconImage.classList.remove("fa-regular", "fa-address-card");
      iconImage.classList.add("fa-solid", "fa-xmark");
    } else {
      iconImage.classList.remove("fa-solid", "fa-xmark");
      iconImage.classList.add("fa-regular", "fa-address-card");
    }
    icon.classList.remove("hide");
  }, 500);
}

// Show form
function showForm() {
  const icon = formContainer.parentElement.querySelector("#form-icon");

  if (icon.children[0].classList.contains("fa-address-card")) {
    // Show form container
    formContainer.classList.add("active");

    changeIcon(icon);

    // Disable scroll on form
    document.body.style.overflow = "hidden";
  } else {
    // Hide form container
    formContainer.classList.remove("active");

    changeIcon(icon);

    document.body.style.overflow = "auto";
  }

  // Hide form icon
  icon.classList.add("hide");

  // Change icon color
  changeIconsColor();
}

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

formBtn.addEventListener("click", showForm);

iconMode.addEventListener("click", changeMode);

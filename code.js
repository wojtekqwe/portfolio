const navbar = document.querySelector(".nav");
const logoImg = document.querySelector(".nav__logo img");
const formBtn = document.querySelector(".nav__menu");
const formContainer = document.querySelector(".form-container");

// Change position and color navigation after scroll
window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    console.log(window.scrollY);
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Show form
// Trzeba ogarnąć formularz jakos
function showForm() {
  // Disable scroll on form
  document.body.style.overflow = "hidden";

  // Show form container
  formContainer.classList.add("active");

  // Change icon color
  formContainer.parentElement.querySelectorAll(".icon").forEach((icon) => {
    icon.classList.add("white");
  });

  // Hide form icon
  const iconForm = formContainer.parentElement.querySelector("#form-icon");
  iconForm.classList.add("hide");

  // Show close icon
  setTimeout(() => {
    iconForm
      .querySelector("i")
      .classList.remove("fa-regular", "fa-address-card");
    iconForm.querySelector("i").classList.add("fa-solid", "fa-xmark");
    iconForm.classList.remove("hide");

    // Close form container
    // 500s, because transition = 0.5s
    iconForm.addEventListener("click", () => {
      formContainer.classList.remove("active");

      document.body.style.overflow = "auto";
    });
  }, 500);

  // formBtn.querySelector("i").classList.remove("fa-regular", "fa-address-card");
  // formBtn.querySelector("i").classList.add("fa-solid", "fa-xmark");

  // formContainer.parentElement.querySelectorAll(".icon").forEach((icon) => {
  //   icon.style.color = "white";
  // });
}

formBtn.addEventListener("click", showForm);

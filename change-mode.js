const iconMode = document.querySelector("#mode-icon");

// Change mode (dark / light)
export function changeMode() {
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

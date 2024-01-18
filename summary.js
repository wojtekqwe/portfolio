import { changeMode } from "./change-mode.js";

const backBtn = document.querySelector("#back");
const iconMode = document.querySelector("#mode-icon");

backBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

iconMode.addEventListener("click", changeMode);

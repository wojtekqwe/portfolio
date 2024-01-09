const messageSmallNumberCharacter = "too few characters - min. ";
const messageInvalidEmail = "invalid email";

function checkOtherField(field, numberLetter) {
  const errorElement = field.nextElementSibling;
  const inputContainer = field.parentElement;
  if (field.value.length > numberLetter) {
    inputContainer.classList.remove("error");
    errorElement.textContent = "";
  } else {
    inputContainer.classList.add("error");
    errorElement.textContent = `${messageSmallNumberCharacter} ${numberLetter}`;
  }
}

function checkEmail(field) {
  const errorElement = field.nextElementSibling;
  const inputContainer = field.parentElement;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!field.value.match(regexEmail)) {
    errorElement.textContent = `${messageInvalidEmail}`;
    inputContainer.classList.add("error");
  } else {
    errorElement.textContent = "";
    inputContainer.classList.remove("error");
  }
}

function checkFieldInForm(element) {
  switch (element.name) {
    case "name":
      checkOtherField(element, 3);
      break;
    case "email":
      checkEmail(element);
      break;
    case "message":
      checkOtherField(element, 10);
  }
}

function getAllInputsInForm() {
  const formElements = document.querySelector(".form").elements;
  const elementsWithNameField = Array.from(formElements).filter(
    (element) => element.name
  );

  elementsWithNameField.forEach((element) => {
    checkFieldInForm(element);
  });
}

export function checkForm(e) {
  e.preventDefault();
  getAllInputsInForm();
}

const messageSmallNumberCharacter = "too few characters - min. ";
const messageInvalidEmail = "invalid email";

const data = {
  name: "",
  email: "",
  message: "",
};

function checkOtherField(field, numberLetter) {
  const errorElement = field.nextElementSibling;
  const inputContainer = field.parentElement;
  if (field.value.length > numberLetter) {
    inputContainer.classList.remove("error");
    errorElement.textContent = "";
    return field.value;
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
    return field.value;
  }
}

function checkFieldInForm(element) {
  switch (element.name) {
    case "name":
      data.name = checkOtherField(element, 3);
      break;
    case "email":
      data.email = checkEmail(element);
      break;
    case "message":
      data.message = checkOtherField(element, 10);
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

function checkForm() {
  getAllInputsInForm();
  if (
    data.email !== undefined &&
    data.name !== undefined &&
    data.message !== undefined
  ) {
    // sendForm()
    // clearForm();
    document.querySelector("form").submit();
    console.log("Send form!!");
  } else {
    console.log("bad data");
  }
}

export function checkToSendForm(e) {
  e.preventDefault();
  checkForm();
}

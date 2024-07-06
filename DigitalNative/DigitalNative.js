const form = document.getElementById("id-form");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const numberCheckRegex = /\d/g;
const nameCheckRegex = /[a-z!#$%&'*+-/=?^_`{|}~]/gi;
import { cardCheck } from "./cardCheck.js";

function onSubmit(event) {
  const inputName = document.getElementById("Name");
  const inputEmail = document.getElementById("Email");
  const inputCard = document.getElementById("Credit-Card-I");
  const errorMessage = document.getElementById("error");
  errorMessage.innerText = "";

  //check name does not contain numbers. if true add relevant error message
  if (inputName.value.match(numberCheckRegex)) {
    inputName.classList.add("invalid");

    errorMessage.innerText +=
      "Name in wrong format - cannot contain numbers \n";
    event.preventDefault();

    //if no numbers remove error class from name
  } else {
    inputName.classList.remove("invalid");
  }

  //check name does not contain invalid characters. if true add relevant error message

  if (!inputName.value.match(nameCheckRegex)) {
    inputName.classList.add("invalid");

    errorMessage.innerText +=
      "Name can only contain letters and the characters !#$%&'*+-/=?^_`{|}~ \n";
    event.preventDefault();

    //if no invalid characters remove error class from name
  } else {
    inputName.classList.remove("invalid");
  }

  //check email matches regex, if false display relevant error message
  if (!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add("invalid");

    errorMessage.innerText += "Email in wrong format\n";
    event.preventDefault();
  }

  //if email valid remove error class from email
  else {
    inputEmail.classList.remove("invalid");
  }

  //check card is the right amount of digits in length
  if (inputCard.value.length < 16) {
    inputCard.classList.add("invalid");
    errorMessage.innerText += "Card number too short, must be 16 digits";
    event.preventDefault();
  } else if (inputCard.value.length > 16) {
    inputCard.classList.add("invalid");
    errorMessage.innerText += "Card number too long, must be 16 digits";
    event.preventDefault();
  } else if (inputCard.value.length === 16) {
    inputCard.classList.remove("invalid");
    if (cardCheck(inputCard.value) === false) {
      errorMessage.innerText += "Card number invalid";
    }
  }
}
//validating inputs whilst they are being typed --

function onChange(event) {
  console.dir(event.target);
}
form.addEventListener("submit", onSubmit);
form.addEventListener("change", onChange);

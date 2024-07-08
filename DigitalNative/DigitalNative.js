const form = document.getElementById("id-form");
let nameValid = false;
let emailValid = false;
let cardValid = false;
// const inputName = document.getElementById("Name");
// const inputEmail = document.getElementById("Email");
// const inputCard = document.getElementById("Credit-Card-I");

// import { cardCheck } from "./cardCheck.js";
// import { nameCheck } from "./nameCheck.js";
// import { emailCheck } from "./emailCheck.js";

function nameCheck(inputName) {
  const nameErrorMessage = document.getElementById("name-error");
  nameErrorMessage.innerText = "";
  const nameValue = inputName.value;
  const nameCheckRegex =
    /^[a-z!#$%&'*+-/=?^_`{|}~]{2,}[\s]+[a-z!#$%&'*+-/=?^_`{|}~]{2,}/gi;

  //check name does not contain numbers. If it does, add relevant error message and mark nameValid as false
  if (!nameValue.match(nameCheckRegex)) {
    inputName.classList.add("invalid");
    nameValid = false;
    nameErrorMessage.innerText +=
      "Error : Name must contain atleast first name and surname and can only contain letters and the following characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~ ";

    return false;
  }
  //if name is valid, mark nameValid as true
  else {
    inputName.classList.remove("invalid");
    nameErrorMessage.innerText = "";
    nameValid = true;
  }
}

function emailCheck(inputEmail) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValue = inputEmail.value;
  const emailErrorMessage = document.getElementById("email-error");

  //check email is valid against email regex, if not add relevant error message and mark emailValid as false
  if (!emailValue.match(emailRegex)) {
    emailErrorMessage.innerText = "Error: Invalid email address";
    inputEmail.classList.add("invalid");
    emailValid = false;
  }
  //if email is valid, mark emailValid as true
  else {
    inputEmail.classList.remove("invalid");
    emailErrorMessage.innerText = "";
    emailValid = true;
  }
}

function cardCheck(inputCardNumber) {
  const cardNumberValue = inputCardNumber.value;
  let array = [];
  let zeroCheck = 0;
  let finalTotal = 0;
  const cardErrorMessage = document.getElementById("card-error");
  cardErrorMessage.innerText = "";

  //check the card number is 16 digits long, if not add relevant error message
  if (cardNumberValue.length < 16) {
    inputCardNumber.classList.add("invalid");
    cardErrorMessage.innerText +=
      "Error: Card number too short, must be 16 digits";
  } else if (cardNumberValue.length > 16) {
    inputCardNumber.classList.add("invalid");
    cardErrorMessage.innerText +=
      "Error: Card number too long, must be 16 digits";
  } else {
    //first, split the card number into an array of length 16 for each number on the card
    const numberArray = cardNumberValue.split("");

    //next, check that the sum of the individual card number digits is not 0
    for (let i = 0; i < numberArray.length; i++) {
      zeroCheck += Number(numberArray[i]);
    }
    //if it is, return false
    if (zeroCheck === 0) {
      cardErrorMessage.innerText = "Error: Invalid card number";
      inputCardNumber.classList.add("invalid");
    }
    //otherwise, carry out the Luhn algorithm
    else
      numberArray.map((num, i) => {
        //for all even indexes and zero, push the card number digit into an array
        if (i === 0 || i % 2 === 0) {
          array.push(Number(numberArray[i]));
        } else {
          //for all odd indexes (i.e. every second card number digit, double it)
          const doubledNumber = num * 2;

          //if doubled card number digit is greater than or equal to 10, add the individual digits together and add the total into the array
          if (doubledNumber >= 10) {
            const doubledNumberAsString = doubledNumber.toString();
            const splitArray = doubledNumberAsString.split("");
            const splitTotal = Number(splitArray[0]) + Number(splitArray[1]);
            array.push(splitTotal);

            //if doubled card number digit is less than 10, add it to the array
          } else {
            array.push(doubledNumber);
          }
        }
      });

    //find the total of all 16 digits in the array
    for (let i = 0; i < array.length; i++) {
      finalTotal += array[i];
    }

    //check that the total is divisible by 10
    if (finalTotal % 10 === 0) {
      cardValid = true;
      inputCardNumber.classList.remove("invalid");
    } else {
      cardErrorMessage.innerText = "Error: Invalid card number";
      inputCardNumber.classList.add("invalid");
    }
  }
}

function submitForm(event) {
  event.preventDefault();
  console.log(nameValid, emailValid, cardValid);
  if (nameValid && emailValid && cardValid) {
    let body = `${inputName.value}%0D%0A${inputEmail.value}%0D%0A${inputCard.value}`;

    window.open(
      `mailto:challenge@dn-uk.com?subject=User%20Details&body=${body}`
    );
  } else {
    event.preventDefault();
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Test");
});

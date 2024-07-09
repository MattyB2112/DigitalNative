const form = document.getElementById("id-form");
let nameValid = false;
let emailValid = false;
let cardValid = false;
const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("Email");
const inputCard = document.getElementById("Credit-Card-I");

form.addEventListener("submit", function (event) {
  const formErrorMessage = document.getElementById("form-error");
  console.log(nameValid, emailValid, cardValid);
  if (!nameValid || !emailValid || !cardValid) {
    event.preventDefault();

    formErrorMessage.innerText = "Please fix highlighted errors to submit form";
  } else {
    formErrorMessage.innerText = "";
    let body = `${inputName.value}%0D%0A${inputEmail.value}%0D%0A${inputCard.value}`;

    window.open(
      `mailto:challenge@dn-uk.com?subject=User%20Details&body=${body}`
    );
  }
});

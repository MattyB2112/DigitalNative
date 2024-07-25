const form = document.getElementById("id-form");
const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("Email");
const inputCard = document.getElementById("Credit-Card-I");

form.addEventListener("submit", function (event) {
  if (!nameValid || !emailValid || !cardValid) {
    event.preventDefault();
    console.log(nameValid, emailValid, cardValid);
  } else {
    let body = `${inputName.value}%0D%0A${inputEmail.value}%0D%0A${inputCard.value}`;

    window.open(`mailto:test@dn-uk.com?subject=User%20Details&body=${body}`);
  }
});

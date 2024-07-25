const form = <HTMLElement>document.getElementById("id-form");
const inputName = (<HTMLInputElement>document.getElementById("Name")).value;
const inputEmail = (<HTMLInputElement>document.getElementById("Email")).value;
const inputCard = (<HTMLInputElement>document.getElementById("Credit-Card-I"))
  .value;
import { nameValid } from "./built/FormNameCheck.js";
import { emailValid } from "./built/FormEmailCheck.js";
import { cardValid } from "./built/FormCardCheck.js";

form.addEventListener("submit", function (event) {
  if (nameValid && emailValid && cardValid) {
    let body = `${inputName}%0D%0A${inputEmail}%0D%0A${inputCard}`;

    window.open(`mailto:test@dn-uk.com?subject=User%20Details&body=${body}`);
  } else {
    event.preventDefault();
  }
});

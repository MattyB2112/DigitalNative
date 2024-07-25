"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("id-form");
const inputName = document.getElementById("Name").value;
const inputEmail = document.getElementById("Email").value;
const inputCard = document.getElementById("Credit-Card-I")
    .value;
const FormNameCheck_js_1 = require("./built/FormNameCheck.js");
const FormEmailCheck_js_1 = require("./built/FormEmailCheck.js");
const FormCardCheck_js_1 = require("./built/FormCardCheck.js");
form.addEventListener("submit", function (event) {
    if (FormNameCheck_js_1.nameValid && FormEmailCheck_js_1.emailValid && FormCardCheck_js_1.cardValid) {
        let body = `${inputName}%0D%0A${inputEmail}%0D%0A${inputCard}`;
        window.open(`mailto:test@dn-uk.com?subject=User%20Details&body=${body}`);
    }
    else {
        event.preventDefault();
    }
});
//# sourceMappingURL=FormOnSubmit.js.map
function emailCheck(inputEmail) {
    let emailValid = false;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValue = inputEmail.value;
    const emailValidMessage = document.getElementById("email-valid");
    //check email is valid against email regex, if not add relevant error message and mark emailValid as false
    if (!emailValue.match(emailRegex)) {
        emailValidMessage.innerText = "";
        inputEmail.classList.remove("valid-border");
        inputEmail.classList.add("invalid-border");
        throw new Error("Email invalid");
    }
    //if email is valid, set emailValid to true
    else {
        inputEmail.classList.remove("invalid-border");
        inputEmail.classList.add("valid-border");
        emailValidMessage.innerText = "Valid Email Address";
        emailValid = true;
        return emailValid;
    }
}
//# sourceMappingURL=FormEmailCheck.js.map
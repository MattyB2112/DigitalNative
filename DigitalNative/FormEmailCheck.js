function emailCheck(inputEmail) {
    var emailValid = false;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var emailValue = inputEmail.value;
    var emailErrorMessage = document.getElementById("email-error");
    var emailValidMessage = document.getElementById("email-valid");
    //check email is valid against email regex, if not add relevant error message and mark emailValid as false
    if (!emailValue.match(emailRegex)) {
        emailValidMessage.innerText = "";
        emailErrorMessage.innerText = "Error: Please enter a valid email address";
        inputEmail.classList.remove("valid-border");
        inputEmail.classList.add("invalid-border");
        emailValid = false;
    }
    //if email is valid, set emailValid to true
    else {
        inputEmail.classList.remove("invalid-border");
        inputEmail.classList.add("valid-border");
        emailErrorMessage.innerText = "";
        emailValidMessage.innerText = "Valid Email Address";
        emailValid = true;
    }
}

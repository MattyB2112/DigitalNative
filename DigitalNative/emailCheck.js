function emailCheck(inputEmail) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValue = inputEmail.value;
  const emailErrorMessage = document.getElementById("email-error");

  //check email is valid against email regex, if not add relevant error message and mark emailValid as false
  if (!emailValue.match(emailRegex)) {
    emailErrorMessage.innerText = "Error: Please enter a valid email address";
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

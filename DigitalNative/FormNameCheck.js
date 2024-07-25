function nameCheck(inputName) {
  if (Number(inputName.value)) {
    throw new Error("Name cannot contain numbers");
  }
  var nameValue = inputName.value;
  var nameValid = false;
  var nameErrorMessage = document.getElementById("name-error");
  var nameValidMessage = document.getElementById("name-valid");
  nameErrorMessage.innerText = "";
  var nameCheckRegex = /[a-z-]{2,}[\s]+[a-z-]{2,}/gi;
  //check name does not contain numbers. If it does, add relevant error message and mark nameValid as false
  if (!nameValue.match(nameCheckRegex)) {
    inputName.classList.remove("valid-border");
    inputName.classList.add("invalid-border");
    nameValidMessage.innerText = "";
    nameErrorMessage.innerText =
      "Error: Name must contain atleast full given name and full family name and can only contain letters and the following characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~ ";
  }
  //if name is valid, set nameValid as true, otherwise set to false
  else {
    inputName.classList.remove("invalid-border");
    inputName.classList.add("valid-border");
    nameErrorMessage.innerText = "";
    nameValidMessage.innerText = "Valid Name";
    nameValid = true;
  }
}

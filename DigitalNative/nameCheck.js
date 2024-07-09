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
      "Error: Name must contain atleast first name and surname and can only contain letters and the following characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~ ";

    return false;
  }
  //if name is valid, mark nameValid as true
  else {
    inputName.classList.remove("invalid");
    nameErrorMessage.innerText = "";
    nameValid = true;
  }
}

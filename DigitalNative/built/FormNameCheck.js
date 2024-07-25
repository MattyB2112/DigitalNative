function nameCheck(inputName) {
    var nameValue = inputName.value;
    let nameValid = false;
    const nameValidMessage = document.getElementById("name-valid");
    const allowedCharsRegex = /[a-z-]{2,}[\s]+[a-z-]{2,}/gi;
    const numbersCheckRegex = /[0-9]/g;
    //check name does not contain numbers. If it does, throw error and add guiding message
    if (nameValue.match(numbersCheckRegex)) {
        inputName.classList.remove("valid-border");
        inputName.classList.add("invalid-border");
        nameValidMessage.innerText = "";
        throw new Error("Name cannot contain numbers");
    }
    //if name is valid, set nameValid as true, otherwise leave as false
    else if (!nameValue.match(allowedCharsRegex)) {
        inputName.classList.remove("valid-border");
        inputName.classList.add("invalid-border");
        nameValidMessage.innerText = "";
        ("Error: Name must contain atleast first name and surname and can only contain letters and the following characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~ ");
        throw new Error("Name invalid");
    }
    else {
        inputName.classList.remove("invalid-border");
        inputName.classList.add("valid-border");
        nameValidMessage.innerText = "Valid Name";
        nameValid = true;
        return nameValid;
    }
}
//# sourceMappingURL=FormNameCheck.js.map
function cardCheck(inputCardNumber) {
    const numberCheckRegex = /[0-9]/g;
    if (!inputCardNumber.value.match(numberCheckRegex)) {
        throw new Error("Card number can only contain numbers");
    }
    let cardValid = false;
    const cardNumberValue = inputCardNumber.value;
    let finalNumbersarray = [];
    let zeroCheck = 0;
    let finalTotal = 0;
    const cardValidMessage = document.getElementById("card-valid");
    //check the card number is 16 digits long, if not add relevant error message
    if (cardNumberValue.length < 16 || cardNumberValue.length > 16) {
        inputCardNumber.classList.remove("valid-border");
        inputCardNumber.classList.add("invalid-border");
        throw new Error("Card number must be 16 digits");
    }
    else {
        //first, split the card number into an array of length 16 for each number on the card
        const cardNumbersArray = cardNumberValue.toString().split("");
        //next, check that the sum of the individual card number digits is not 0
        for (let i = 0; i < cardNumbersArray.length; i++) {
            zeroCheck += Number(cardNumbersArray[i]);
        }
        //if it is, return false
        if (zeroCheck === 0) {
            inputCardNumber.classList.remove("valid-border");
            inputCardNumber.classList.add("invalid-border");
            throw new Error("Invalid card number");
        }
        //otherwise, carry out the Luhn algorithm
        else
            cardNumbersArray.map((num, i) => {
                //for all even indexes and zero, push the card number digit into an array
                if (i === 0 || i % 2 === 0) {
                    finalNumbersarray.push(Number(cardNumbersArray[i]));
                }
                else {
                    //for all odd indexes (i.e. every second card number digit, double it)
                    const doubledNumber = Number(num) * 2;
                    //if doubled card number digit is greater than or equal to 10, add the individual digits together and add the total into the array
                    if (doubledNumber >= 10) {
                        const doubledNumberAsString = doubledNumber.toString();
                        const splitArray = doubledNumberAsString.split("");
                        const splitTotal = Number(splitArray[0]) + Number(splitArray[1]);
                        finalNumbersarray.push(splitTotal);
                        //if doubled card number digit is less than 10, add it to the array
                    }
                    else {
                        finalNumbersarray.push(doubledNumber);
                    }
                }
            });
        //find the total of all 16 digits in the array
        for (let i = 0; i < finalNumbersarray.length; i++) {
            finalTotal += finalNumbersarray[i];
        }
        //check that the total is divisible by 10, if it is set cardValid to true, otherwise set it to false
        if (finalTotal % 10 === 0) {
            cardValid = true;
            inputCardNumber.classList.remove("invalid-border");
            inputCardNumber.classList.add("valid-border");
            cardValidMessage.innerText = "Valid Card Number";
            return cardValid;
        }
        else {
            cardValid = false;
            inputCardNumber.classList.remove("valid-border");
            inputCardNumber.classList.add("invalid-border");
            throw new Error("Invalid card number");
        }
    }
}
//# sourceMappingURL=FormCardCheck.js.map
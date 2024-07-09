function cardCheck(inputCardNumber) {
  const cardNumberValue = inputCardNumber.value;
  let finalNumbersarray = [];
  let zeroCheck = 0;
  let finalTotal = 0;
  const cardErrorMessage = document.getElementById("card-error");
  cardErrorMessage.innerText = "";

  //check the card number is 16 digits long, if not add relevant error message
  if (cardNumberValue.length < 16) {
    inputCardNumber.classList.add("invalid");
    cardErrorMessage.innerText +=
      "Error: Card number too short, must be 16 digits";
  } else if (cardNumberValue.length > 16) {
    inputCardNumber.classList.add("invalid");
    cardErrorMessage.innerText +=
      "Error: Card number too long, must be 16 digits";
  } else {
    //first, split the card number into an array of length 16 for each number on the card
    const cardNumbersArray = cardNumberValue.split("");

    //next, check that the sum of the individual card number digits is not 0
    for (let i = 0; i < cardNumbersArray.length; i++) {
      zeroCheck += Number(cardNumbersArray[i]);
    }
    //if it is, return false
    if (zeroCheck === 0) {
      cardErrorMessage.innerText = "Error: Invalid card number";
      inputCardNumber.classList.add("invalid");
    }
    //otherwise, carry out the Luhn algorithm
    else
      cardNumbersArray.map((num, i) => {
        //for all even indexes and zero, push the card number digit into an array
        if (i === 0 || i % 2 === 0) {
          finalNumbersarray.push(Number(cardNumbersArray[i]));
        } else {
          //for all odd indexes (i.e. every second card number digit, double it)
          const doubledNumber = num * 2;

          //if doubled card number digit is greater than or equal to 10, add the individual digits together and add the total into the array
          if (doubledNumber >= 10) {
            const doubledNumberAsString = doubledNumber.toString();
            const splitArray = doubledNumberAsString.split("");
            const splitTotal = Number(splitArray[0]) + Number(splitArray[1]);
            finalNumbersarray.push(splitTotal);

            //if doubled card number digit is less than 10, add it to the array
          } else {
            finalNumbersarray.push(doubledNumber);
          }
        }
      });

    //find the total of all 16 digits in the array
    for (let i = 0; i < finalNumbersarray.length; i++) {
      finalTotal += finalNumbersarray[i];
    }

    //check that the total is divisible by 10
    if (finalTotal % 10 === 0) {
      cardValid = true;
      inputCardNumber.classList.remove("invalid");
    } else {
      cardErrorMessage.innerText = "Error: Invalid card number";
      inputCardNumber.classList.add("invalid");
    }
  }
}

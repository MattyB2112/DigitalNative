import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-card-input',
  standalone: true,
  imports: [],
  templateUrl: './form-card-input.component.html',
  styleUrl: './form-card-input.component.css',
})
export class FormCardInputComponent {
  @Input() item3 = false;

  cardCheck(inputCardNumber: HTMLInputElement): void {
    const cardNumberValue = inputCardNumber.value;
    // const cardValidMessage = <HTMLInputElement>(
    //   document.getElementById('card-valid-message')
    // );
    // const cardInvalidMessage = <HTMLInputElement>(
    //   document.getElementById('card-invalid-message')
    // );

    //declare variable for the final numbers array
    let finalNumbersarray: number[] = [];

    //declare counter to check sum of input card numbers is not zero
    let zeroCheck = 0;

    //declare counter for checking sum of final numbers array
    let finalTotal = 0;

    if (isNaN(Number(cardNumberValue))) {
      inputCardNumber.classList.remove('valid-border');
      inputCardNumber.classList.add('invalid-border');
      // cardInvalidMessage.innerText = 'Card field can only contain numbers';
      // cardValidMessage.innerText = '';
      this.item3 = false;
    }

    //check the card number is 16 digits long, if not add relevant error message
    if (cardNumberValue.length < 16 || cardNumberValue.length > 16) {
      inputCardNumber.classList.remove('valid-border');
      inputCardNumber.classList.add('invalid-border');
      // cardInvalidMessage.innerText = 'Card number must be 16 digits';
      // cardValidMessage.innerText = '';
      this.item3 = false;
    } else {
      //first, split the card number into an array of length 16 for each number on the card
      const cardNumbersArray = cardNumberValue.split('');

      //next, check that the sum of the individual card number digits is not 0
      for (let i = 0; i < cardNumbersArray.length; i++) {
        zeroCheck += Number(cardNumbersArray[i]);
      }

      //if it is, return false
      if (zeroCheck === 0) {
        inputCardNumber.classList.remove('valid-border');
        inputCardNumber.classList.add('invalid-border');
        // cardInvalidMessage.innerText = 'Card number invalid';
        // cardValidMessage.innerText = '';
        this.item3 = false;
      }

      //otherwise, carry out the Luhn algorithm
      else
        cardNumbersArray.map((num: string, i: number) => {
          //for all even indexes and zero, push the card number digit into an array
          if (i === 0 || i % 2 === 0) {
            finalNumbersarray.push(Number(cardNumbersArray[i]));
          } else {
            //for all odd indexes (i.e. every second card number digit, double it)
            const doubledNumber = Number(num) * 2;

            //if doubled card number digit is greater than or equal to 10, add the individual digits together and add the total into the array
            if (doubledNumber >= 10) {
              const doubledNumberAsString = doubledNumber.toString();
              const splitArray = doubledNumberAsString.split('');
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

      //check that the total is divisible by 10, if it is return true, otherwise return false
      if (finalTotal % 10 === 0) {
        inputCardNumber.classList.remove('invalid-border');
        inputCardNumber.classList.add('valid-border');
        // cardInvalidMessage.innerText = '';
        // cardValidMessage.innerText = 'Valid Card Number';
        this.item3 = true;
      } else {
        inputCardNumber.classList.remove('valid-border');
        inputCardNumber.classList.add('invalid-border');
        // cardInvalidMessage.innerText = 'Card number invalid';
        // cardValidMessage.innerText = '';
        this.item3 = false;
      }
    }
  }
}

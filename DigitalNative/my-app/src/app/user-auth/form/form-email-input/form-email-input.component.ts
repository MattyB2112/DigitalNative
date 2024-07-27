import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-email-input',
  standalone: true,
  imports: [],
  templateUrl: './form-email-input.component.html',
  styleUrl: './form-email-input.component.css',
})
export class FormEmailInputComponent {
  @Input() item2 = false;

  emailCheck(inputEmail: HTMLInputElement): void {
    var emailValue: string = inputEmail.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const emailInvalidMessage = <HTMLInputElement>(
    //   document.getElementById('email-invalid-message')
    // );
    // const emailValidMessage = <HTMLInputElement>(
    //   document.getElementById('email-valid-message')
    // );

    //check email is valid against email regex, if not add relevant error message and return false
    if (!emailValue.match(emailRegex)) {
      inputEmail.classList.remove('valid-border');
      inputEmail.classList.add('invalid-border');
      // emailValidMessage.innerText = '';
      // emailInvalidMessage.innerText = 'Please enter a valid email address';
      this.item2 = false;
    }
    //if email is valid, set emailValid to true
    else {
      inputEmail.classList.remove('invalid-border');
      inputEmail.classList.add('valid-border');
      // emailValidMessage.innerText = 'Valid Email Address';
      // emailInvalidMessage.innerText = '';
      this.item2 = true;
    }
  }
}

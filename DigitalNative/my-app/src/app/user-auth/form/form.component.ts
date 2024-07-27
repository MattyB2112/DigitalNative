import { Component } from '@angular/core';
import { FormNameInputComponent } from './form-name-input/form-name-input.component';
import { FormEmailInputComponent } from './form-email-input/form-email-input.component';
import { FormCardInputComponent } from './form-card-input/form-card-input.component';
import { FormSubmitButtonComponent } from './form-submit-button/form-submit-button.component';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [
    FormNameInputComponent,
    FormEmailInputComponent,
    FormCardInputComponent,
    FormSubmitButtonComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  nameValid = false;
  emailValid = false;
  cardValid = false;
}

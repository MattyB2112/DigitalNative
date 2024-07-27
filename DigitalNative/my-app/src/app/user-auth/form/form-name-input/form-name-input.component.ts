import { Component, Input, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProfileService } from '../../../profile.service';

@Component({
  selector: 'form-name-input',
  standalone: true,
  imports: [],
  templateUrl: './form-name-input.component.html',
  styleUrl: './form-name-input.component.css',
})
export class FormNameInputComponent {
  private profileService = inject(ProfileService);

  saveProfile(newProfile: any) {
    this.profileService.changeProfile(newProfile);
  }
  @Input() item = false;

  nameCheck(inputName: HTMLInputElement): void {
    var nameValue: string = inputName.value;
    // const nameValidMessage = <HTMLInputElement>(
    //   document.getElementById('name-valid-message')
    // );
    // const nameErrorMessage = <HTMLInputElement>(
    //   document.getElementById('name-invalid-message')
    // );
    const allowedCharsRegex = /[a-z-]{2,}[\s]+[a-z-]{2,}/gi;
    const numbersCheckRegex = /[0-9]/g;

    //check name does not contain numbers. If it does, add red border, guiding message and return false
    if (nameValue.match(numbersCheckRegex)) {
      inputName.classList.remove('valid-border');
      inputName.classList.add('invalid-border');
      // nameErrorMessage.innerText = 'Name cannot contain numbers';
      // nameValidMessage.innerText = '';
      this.item = false;
    }
    //if name is invalid, add red border and return false
    else if (!nameValue.match(allowedCharsRegex)) {
      inputName.classList.remove('valid-border');
      inputName.classList.add('invalid-border');
      // nameValidMessage.innerText = '';
      // nameErrorMessage.innerText =
      ('Error: Name must contain atleast full given name and surname (hyphens allowed)');
      this.item = false;

      //otherwise, add green border and return true
    } else {
      inputName.classList.remove('invalid-border');
      inputName.classList.add('valid-border');
      // nameErrorMessage.innerText = '';
      // nameValidMessage.innerText = 'Valid Name';
      this.item = true;
    }
  }
}

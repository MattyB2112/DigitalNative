import { Component, Input, inject, OnInit } from '@angular/core';
import { ProfileService } from '../../../profile.service';
const inputName = <HTMLInputElement>document.getElementById('Name');
const inputEmail = <HTMLInputElement>document.getElementById('Email');
const inputCard = <HTMLInputElement>document.getElementById('Credit-Card-I');

@Component({
  selector: 'form-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './form-submit-button.component.html',
  styleUrl: './form-submit-button.component.css',
})
export class FormSubmitButtonComponent implements OnInit {
  @Input() item = false;

  private profileService = inject(ProfileService);
  profile = null;
  ngOnInit(): void {
    this.profileService.currentProfile.subscribe((profile) => {
      this.profile = profile;
    });
  }

  onSubmission(event: any) {
    event.preventDefault();
    console.log(this.item);
  }
  // onSubmission(
  //   event: any,
  //   nameValid: boolean,
  //   emailValid: boolean,
  //   cardValid: boolean
  // ): void {
  //   if (nameValid && emailValid && cardValid) {
  //     let body: string =
  //       inputName.value + '\n' + inputEmail.value + '\n' + inputCard.value;
  //     window.open(`mailto:test@dn-uk.com?subject=User%20Details&body=${body}`);
  //   } else {
  //     event.preventDefault();
  //     alert('Please correct highlighted errors to submit form');
  //   }
  // }
}

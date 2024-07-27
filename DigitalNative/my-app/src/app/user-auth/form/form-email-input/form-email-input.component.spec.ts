import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailInputComponent } from './form-email-input.component';

describe('FormEmailInputComponent', () => {
  let component: FormEmailInputComponent;
  let fixture: ComponentFixture<FormEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmailInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

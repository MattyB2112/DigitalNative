import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCardInputComponent } from './form-card-input.component';

describe('FormCardInputComponent', () => {
  let component: FormCardInputComponent;
  let fixture: ComponentFixture<FormCardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCardInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

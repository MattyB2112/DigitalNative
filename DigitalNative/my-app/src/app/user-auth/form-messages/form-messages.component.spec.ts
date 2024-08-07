import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMessagesComponent } from './form-messages.component';

describe('FormMessagesComponent', () => {
  let component: FormMessagesComponent;
  let fixture: ComponentFixture<FormMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

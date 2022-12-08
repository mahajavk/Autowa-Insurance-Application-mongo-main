import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUSComponent } from './ContactUS.component';

describe('VehicleCustomersComponent', () => {
  let component: ContactUSComponent;
  let fixture: ComponentFixture<ContactUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

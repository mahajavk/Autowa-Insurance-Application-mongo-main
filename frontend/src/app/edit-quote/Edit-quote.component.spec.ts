import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuoteComponent } from './Edit-quote.component';

describe('CreateQuoteComponent', () => {
  let component: EditQuoteComponent;
  let fixture: ComponentFixture<EditQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

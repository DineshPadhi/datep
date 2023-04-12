import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepicComponent } from './datepic.component';

describe('DatepicComponent', () => {
  let component: DatepicComponent;
  let fixture: ComponentFixture<DatepicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

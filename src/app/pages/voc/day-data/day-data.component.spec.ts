import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDataComponent } from './day-data.component';

describe('DayDataComponent', () => {
  let component: DayDataComponent;
  let fixture: ComponentFixture<DayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

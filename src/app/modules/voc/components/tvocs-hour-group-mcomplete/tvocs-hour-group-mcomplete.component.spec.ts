import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVocsHourGroupMCompleteComponent } from './tvocs-hour-group-mcomplete.component';

describe('TVocsHourGroupMCompleteComponent', () => {
  let component: TVocsHourGroupMCompleteComponent;
  let fixture: ComponentFixture<TVocsHourGroupMCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVocsHourGroupMCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVocsHourGroupMCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

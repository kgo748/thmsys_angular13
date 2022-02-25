import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVocsHourGroupMComponent } from './tvocs-hour-group-m.component';

describe('TVocsHourGroupMComponent', () => {
  let component: TVocsHourGroupMComponent;
  let fixture: ComponentFixture<TVocsHourGroupMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVocsHourGroupMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVocsHourGroupMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

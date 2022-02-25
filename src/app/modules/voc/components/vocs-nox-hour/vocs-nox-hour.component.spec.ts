import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocsNOxHourComponent } from './vocs-nox-hour.component';

describe('VocsNOxHourComponent', () => {
  let component: VocsNOxHourComponent;
  let fixture: ComponentFixture<VocsNOxHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocsNOxHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocsNOxHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

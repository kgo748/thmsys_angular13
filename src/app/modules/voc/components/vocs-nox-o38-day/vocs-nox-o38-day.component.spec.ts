import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocsNOxO38DayComponent } from './vocs-nox-o38-day.component';

describe('VocsNOxO38DayComponent', () => {
  let component: VocsNOxO38DayComponent;
  let fixture: ComponentFixture<VocsNOxO38DayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocsNOxO38DayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocsNOxO38DayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

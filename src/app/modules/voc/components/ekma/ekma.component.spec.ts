import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkmaComponent } from './ekma.component';

describe('EkmaComponent', () => {
  let component: EkmaComponent;
  let fixture: ComponentFixture<EkmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

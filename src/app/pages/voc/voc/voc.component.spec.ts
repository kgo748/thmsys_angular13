import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocComponent } from './voc.component';

describe('VocComponent', () => {
  let component: VocComponent;
  let fixture: ComponentFixture<VocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

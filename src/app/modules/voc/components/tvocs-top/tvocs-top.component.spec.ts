import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVocsTopComponent } from './tvocs-top.component';

describe('TVocsTopComponent', () => {
  let component: TVocsTopComponent;
  let fixture: ComponentFixture<TVocsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVocsTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVocsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

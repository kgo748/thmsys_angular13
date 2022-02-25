import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestuserComponent } from './testuser.component';

describe('TestuserComponent', () => {
  let component: TestuserComponent;
  let fixture: ComponentFixture<TestuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

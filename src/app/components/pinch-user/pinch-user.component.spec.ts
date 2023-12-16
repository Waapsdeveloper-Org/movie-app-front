import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinchUserComponent } from './pinch-user.component';

describe('PinchUserComponent', () => {
  let component: PinchUserComponent;
  let fixture: ComponentFixture<PinchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinchUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

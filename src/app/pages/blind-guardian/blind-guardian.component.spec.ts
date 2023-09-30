import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindGuardianComponent } from './blind-guardian.component';

describe('BlindGuardianComponent', () => {
  let component: BlindGuardianComponent;
  let fixture: ComponentFixture<BlindGuardianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlindGuardianComponent]
    });
    fixture = TestBed.createComponent(BlindGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

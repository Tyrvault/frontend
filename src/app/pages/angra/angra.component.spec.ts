import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngraComponent } from './angra.component';

describe('AngraComponent', () => {
  let component: AngraComponent;
  let fixture: ComponentFixture<AngraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngraComponent]
    });
    fixture = TestBed.createComponent(AngraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

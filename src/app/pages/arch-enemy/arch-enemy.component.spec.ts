import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchEnemyComponent } from './arch-enemy.component';

describe('ArchEnemyComponent', () => {
  let component: ArchEnemyComponent;
  let fixture: ComponentFixture<ArchEnemyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchEnemyComponent]
    });
    fixture = TestBed.createComponent(ArchEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

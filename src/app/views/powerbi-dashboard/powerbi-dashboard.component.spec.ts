import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbiDashboardComponent } from './powerbi-dashboard.component';

describe('PowerbiDashboardComponent', () => {
  let component: PowerbiDashboardComponent;
  let fixture: ComponentFixture<PowerbiDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerbiDashboardComponent]
    });
    fixture = TestBed.createComponent(PowerbiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

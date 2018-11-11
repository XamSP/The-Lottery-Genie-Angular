import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPowerBallRulesComponent } from './my-power-ball-rules.component';

describe('MyPowerBallRulesComponent', () => {
  let component: MyPowerBallRulesComponent;
  let fixture: ComponentFixture<MyPowerBallRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPowerBallRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPowerBallRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

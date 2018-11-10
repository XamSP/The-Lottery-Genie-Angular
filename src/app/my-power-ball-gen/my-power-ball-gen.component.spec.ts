import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPowerBallGenComponent } from './my-power-ball-gen.component';

describe('MyPowerBallGenComponent', () => {
  let component: MyPowerBallGenComponent;
  let fixture: ComponentFixture<MyPowerBallGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPowerBallGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPowerBallGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

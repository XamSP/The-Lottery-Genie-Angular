import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLuckyMoneyRulesComponent } from './my-lucky-money-rules.component';

describe('MyLuckyMoneyRulesComponent', () => {
  let component: MyLuckyMoneyRulesComponent;
  let fixture: ComponentFixture<MyLuckyMoneyRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLuckyMoneyRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLuckyMoneyRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

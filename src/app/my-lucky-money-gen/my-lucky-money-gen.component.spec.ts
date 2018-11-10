import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLuckyMoneyGenComponent } from './my-lucky-money-gen.component';

describe('MyLuckyMoneyGenComponent', () => {
  let component: MyLuckyMoneyGenComponent;
  let fixture: ComponentFixture<MyLuckyMoneyGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLuckyMoneyGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLuckyMoneyGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

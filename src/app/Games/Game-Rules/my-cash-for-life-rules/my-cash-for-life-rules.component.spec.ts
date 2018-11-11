import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCashForLifeRulesComponent } from './my-cash-for-life-rules.component';

describe('MyCashForLifeRulesComponent', () => {
  let component: MyCashForLifeRulesComponent;
  let fixture: ComponentFixture<MyCashForLifeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCashForLifeRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCashForLifeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

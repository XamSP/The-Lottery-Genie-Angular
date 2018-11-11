import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFLLottoRulesComponent } from './my-fl-lotto-rules.component';

describe('MyFLLottoRulesComponent', () => {
  let component: MyFLLottoRulesComponent;
  let fixture: ComponentFixture<MyFLLottoRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFLLottoRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFLLottoRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

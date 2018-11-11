import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMegaMillionsRulesComponent } from './my-mega-millions-rules.component';

describe('MyMegaMillionsRulesComponent', () => {
  let component: MyMegaMillionsRulesComponent;
  let fixture: ComponentFixture<MyMegaMillionsRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMegaMillionsRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMegaMillionsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

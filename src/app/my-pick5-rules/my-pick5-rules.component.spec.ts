import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick5RulesComponent } from './my-pick5-rules.component';

describe('MyPick5RulesComponent', () => {
  let component: MyPick5RulesComponent;
  let fixture: ComponentFixture<MyPick5RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick5RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick5RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

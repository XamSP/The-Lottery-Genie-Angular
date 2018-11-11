import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick2RulesComponent } from './my-pick2-rules.component';

describe('MyPick2RulesComponent', () => {
  let component: MyPick2RulesComponent;
  let fixture: ComponentFixture<MyPick2RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick2RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick2RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

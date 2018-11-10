import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick4RulesComponent } from './my-pick4-rules.component';

describe('MyPick4RulesComponent', () => {
  let component: MyPick4RulesComponent;
  let fixture: ComponentFixture<MyPick4RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick4RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick4RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick3RulesComponent } from './my-pick3-rules.component';

describe('MyPick3RulesComponent', () => {
  let component: MyPick3RulesComponent;
  let fixture: ComponentFixture<MyPick3RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick3RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick3RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

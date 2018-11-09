import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick2GenComponent } from './my-pick2-gen.component';

describe('MyPick2GenComponent', () => {
  let component: MyPick2GenComponent;
  let fixture: ComponentFixture<MyPick2GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick2GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick2GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

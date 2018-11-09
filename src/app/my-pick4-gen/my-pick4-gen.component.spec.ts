import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick4GenComponent } from './my-pick4-gen.component';

describe('MyPick4GenComponent', () => {
  let component: MyPick4GenComponent;
  let fixture: ComponentFixture<MyPick4GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick4GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick4GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

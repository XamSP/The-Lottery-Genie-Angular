import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick5GenComponent } from './my-pick5-gen.component';

describe('MyPick5GenComponent', () => {
  let component: MyPick5GenComponent;
  let fixture: ComponentFixture<MyPick5GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick5GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick5GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

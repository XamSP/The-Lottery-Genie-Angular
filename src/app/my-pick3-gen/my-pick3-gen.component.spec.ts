import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPick3GenComponent } from './my-pick3-gen.component';

describe('MyPick3GenComponent', () => {
  let component: MyPick3GenComponent;
  let fixture: ComponentFixture<MyPick3GenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPick3GenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPick3GenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

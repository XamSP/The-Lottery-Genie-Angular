import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFantasy5GenFLComponent } from './my-fantasy5-gen-fl.component';

describe('MyFantasy5GenFLComponent', () => {
  let component: MyFantasy5GenFLComponent;
  let fixture: ComponentFixture<MyFantasy5GenFLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFantasy5GenFLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFantasy5GenFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

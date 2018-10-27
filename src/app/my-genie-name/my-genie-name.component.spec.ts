import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenieNameComponent } from './my-genie-name.component';

describe('MyGenieNameComponent', () => {
  let component: MyGenieNameComponent;
  let fixture: ComponentFixture<MyGenieNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenieNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenieNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

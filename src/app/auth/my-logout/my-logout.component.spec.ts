import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogoutComponent } from './my-logout.component';

describe('MyLogoutComponent', () => {
  let component: MyLogoutComponent;
  let fixture: ComponentFixture<MyLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperiencePointsComponent } from './my-experience-points.component';

describe('MyExperiencePointsComponent', () => {
  let component: MyExperiencePointsComponent;
  let fixture: ComponentFixture<MyExperiencePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExperiencePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExperiencePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

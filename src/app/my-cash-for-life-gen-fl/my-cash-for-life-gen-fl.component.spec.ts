import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCashForLifeGenFLComponent } from './my-cash-for-life-gen-fl.component';

describe('MyCashForLifeGenFLComponent', () => {
  let component: MyCashForLifeGenFLComponent;
  let fixture: ComponentFixture<MyCashForLifeGenFLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCashForLifeGenFLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCashForLifeGenFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

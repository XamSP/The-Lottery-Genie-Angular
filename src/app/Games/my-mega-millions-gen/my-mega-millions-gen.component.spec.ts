import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMegaMillionsGenComponent } from './my-mega-millions-gen.component';

describe('MyMegaMillionsGenComponent', () => {
  let component: MyMegaMillionsGenComponent;
  let fixture: ComponentFixture<MyMegaMillionsGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMegaMillionsGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMegaMillionsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

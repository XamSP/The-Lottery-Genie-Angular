import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFloridaLottoGenComponent } from './my-florida-lotto-gen.component';

describe('MyFloridaLottoGenComponent', () => {
  let component: MyFloridaLottoGenComponent;
  let fixture: ComponentFixture<MyFloridaLottoGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFloridaLottoGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFloridaLottoGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

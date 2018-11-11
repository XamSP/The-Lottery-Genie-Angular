import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantsy5RulesComponent } from './fantsy5-rules.component';

describe('Fantsy5RulesComponent', () => {
  let component: Fantsy5RulesComponent;
  let fixture: ComponentFixture<Fantsy5RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantsy5RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantsy5RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

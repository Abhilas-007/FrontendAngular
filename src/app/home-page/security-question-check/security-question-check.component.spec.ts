import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionCHeckComponent } from './security-question-check.component';

describe('SecurityQuestionCHeckComponent', () => {
  let component: SecurityQuestionCHeckComponent;
  let fixture: ComponentFixture<SecurityQuestionCHeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQuestionCHeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionCHeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

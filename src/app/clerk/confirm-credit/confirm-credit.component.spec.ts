import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCreditComponent } from './confirm-credit.component';

describe('ConfirmCreditComponent', () => {
  let component: ConfirmCreditComponent;
  let fixture: ComponentFixture<ConfirmCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

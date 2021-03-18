import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConfirmDialogComponent } from './credit-confirm-dialog.component';

describe('CreditConfirmDialogComponent', () => {
  let component: CreditConfirmDialogComponent;
  let fixture: ComponentFixture<CreditConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTabComponent } from './credit-tab.component';

describe('CreditTabComponent', () => {
  let component: CreditTabComponent;
  let fixture: ComponentFixture<CreditTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

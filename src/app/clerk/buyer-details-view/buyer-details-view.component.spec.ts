import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDetailsViewComponent } from './buyer-details-view.component';

describe('BuyerDetailsViewComponent', () => {
  let component: BuyerDetailsViewComponent;
  let fixture: ComponentFixture<BuyerDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

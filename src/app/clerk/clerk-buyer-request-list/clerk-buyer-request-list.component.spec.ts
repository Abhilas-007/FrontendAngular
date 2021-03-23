import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkBuyerRequestListComponent } from './clerk-buyer-request-list.component';

describe('ClerkBuyerRequestListComponent', () => {
  let component: ClerkBuyerRequestListComponent;
  let fixture: ComponentFixture<ClerkBuyerRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClerkBuyerRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkBuyerRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycropsComponent } from './buycrops.component';

describe('BuycropsComponent', () => {
  let component: BuycropsComponent;
  let fixture: ComponentFixture<BuycropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCropsTabComponent } from './buy-crops-tab.component';

describe('BuyCropsTabComponent', () => {
  let component: BuyCropsTabComponent;
  let fixture: ComponentFixture<BuyCropsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCropsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCropsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

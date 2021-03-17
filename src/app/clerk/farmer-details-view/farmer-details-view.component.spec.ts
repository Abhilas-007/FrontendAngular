import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDetailsViewComponent } from './farmer-details-view.component';

describe('FarmerDetailsViewComponent', () => {
  let component: FarmerDetailsViewComponent;
  let fixture: ComponentFixture<FarmerDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

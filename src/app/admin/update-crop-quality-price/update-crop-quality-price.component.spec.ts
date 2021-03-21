import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCropQualityPriceComponent } from './update-crop-quality-price.component';

describe('UpdateCropQualityPriceComponent', () => {
  let component: UpdateCropQualityPriceComponent;
  let fixture: ComponentFixture<UpdateCropQualityPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCropQualityPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCropQualityPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

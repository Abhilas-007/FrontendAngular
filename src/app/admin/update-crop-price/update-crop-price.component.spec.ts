import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCropPriceComponent } from './update-crop-price.component';

describe('UpdateCropPriceComponent', () => {
  let component: UpdateCropPriceComponent;
  let fixture: ComponentFixture<UpdateCropPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCropPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCropPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

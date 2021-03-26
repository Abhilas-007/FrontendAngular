import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateCropQualityPriceComponent } from './update-crop-quality-price.component';

describe('UpdateCropQualityPriceComponent', () => {
  let component: UpdateCropQualityPriceComponent;
  let fixture: ComponentFixture<UpdateCropQualityPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCropQualityPriceComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCropQualityPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 1', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2', () => {
    expect(component.ngOnInit()).toBe();
  });

  it('should create 3', () => {
    expect(component.getPrice()).toBe();
  });

  it('should create 5', () => {
    expect(component.cancel()).toBe();
  });
});

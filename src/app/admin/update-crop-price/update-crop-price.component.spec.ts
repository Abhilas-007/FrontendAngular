import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateCropPriceComponent } from './update-crop-price.component';

describe('UpdateCropPriceComponent', () => {
  let component: UpdateCropPriceComponent;
  let fixture: ComponentFixture<UpdateCropPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCropPriceComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
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

  it('should create', () => {
    expect(component.ngOnInit()).toBe();
  });

  it('should create', () => {
    expect(component.onSubmit()).toBe();
  });

  it('should create', () => {
    expect(component.getPreviousPrice()).toBe();
  });

  it('should create', () => {
    expect(component.printSuccessMessage()).toBe();
  });

  it('should create', () => {
    expect(component.onCancel()).toBe();
  });
});

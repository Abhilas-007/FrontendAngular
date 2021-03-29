import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CropVariety } from 'src/app/shared/models/CropVariety';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-crop-quality-price',
  templateUrl: './update-crop-quality-price.component.html',
  styleUrls: ['./update-crop-quality-price.component.scss'],
})
export class UpdateCropQualityPriceComponent implements OnInit {
  cropPrice: Number;
  cropVariety: CropVariety;
  map = new Map();
  qPUpdateForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^([A-Za-z])+(( )([A-Za-z])+)*$'),
    ]),
    class: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-cA-C]{1}'),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9][0-9]{0,3}'),
    ]),
  });
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}
  getPrice(): void {
    console.log(this.qPUpdateForm);
    this.map.set('cropName', this.qPUpdateForm.controls['name'].value);
    this.map.set('cropClass', this.qPUpdateForm.controls['class'].value);

    this.adminService.getQPrice(this.map).subscribe(
      (data) => {
        if (data != null) {
          this.cropVariety = data;
          this.cropPrice = this.cropVariety.cropQualityPrice;
        } else {
          alert('no crop found for given details');
          this.qPUpdateForm.reset();
        }
      },
      (error) => {
        alert('Invalid Input');
        console.log(error);
        this.qPUpdateForm.reset();
      }
    );
  }
  submit(): void {
    if (
      this.qPUpdateForm.controls['price'].value !=
      this.cropVariety.cropQualityPrice
    ) {
      this.cropVariety.cropQualityPrice = this.qPUpdateForm.controls[
        'price'
      ].value;
      this.adminService.updateQPrice(this.cropVariety).subscribe(
        (data) => {
          if (data != null) {
            alert("crop price updated");
            this.cropPrice=null;
            this.qPUpdateForm.reset();
          } else alert("the price couldn't be updated");
        },
        (error) => {
          alert("the price couldn't be updated");
          console.log(error);
        }
      );
    } else {
      alert('nothing to update');
      this.router.navigate(['/admin']);
    }
  }

  cancel(): void {
    //this.qPUpdateForm.reset();
    this.router.navigate(['/admin']);
  }
}

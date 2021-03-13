import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CropVariety } from 'src/app/shared/models/CropVariety';
import { AdminService } from '../admin.service';
import { HomePageComponent} from '../../home-page/home-page.component'

@Component({
  selector: 'app-update-crop-price',
  templateUrl: './update-crop-price.component.html',
  styleUrls: ['./update-crop-price.component.css']
})
export class UpdateCropPriceComponent implements OnInit {

  constructor(private fb: FormBuilder, private updatePriceService: AdminService, private router: Router) { }
  UpdateForm: FormGroup;
  cropName: string = '';
  cropVariety:CropVariety= new CropVariety();
  crop;
  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      cropName: [null, [Validators.required, Validators.pattern("^([A-Za-z])+(( )([A-Za-z])+)*$")]],
      cropClass: [null, [Validators.required, Validators.pattern("[A-C]")]],
      price: [null, [Validators.required, Validators.pattern("[1-9]([0-9]{1,4})?")]]
    });
  }
  map1 = new Map();
  onSubmit() {
    console.log(this.UpdateForm);
    this.map1.set('cropName', this.UpdateForm.controls['cropName'].value);
    this.map1.set('cropClass', this.UpdateForm.controls['cropClass'].value);
    this.map1.set('price', this.UpdateForm.controls['price'].value);
    this.updatePriceService.updateCropPrice(this.map1).subscribe((data) => {
      if(data!=null){
        console.log(data);
        this.printSuccessMessage();
      }if (data == null) {
        console.log(data);
        alert('invalid credentials');
        this.router.navigate(['/admin']);
      }
    },
    (error) => {
      console.log(error);
     });

  }
  map = new Map();
  getPreviousPrice() {

    this.map.set('cropName', this.UpdateForm.controls['cropName'].value);
    console.log(this.map.get('cropName'));
    this.map.set('cropClass', this.UpdateForm.controls['cropClass'].value);

    this.updatePriceService.getCropPriceForBuyer(this.map).subscribe((data) => {
      if(data!=null){
        console.log(data);
        this.crop = data;
        console.log(this.crop);
      } if (data == null) {
        console.log(data);
        alert('invalid credentials');
        this.router.navigate(['/admin']);
      }
    },
    (error) => {
      console.log(error);
    }
     );
  }
  printSuccessMessage(){
    alert("Price Updated Successfully");
    this.router.navigate(['/admin']);
  }

  onCancel(){
    this.router.navigate(['/admin']);
  }
}

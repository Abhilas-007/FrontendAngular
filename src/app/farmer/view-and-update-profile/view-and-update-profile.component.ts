import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/shared/models/Farmer';
import { FarmerServiceService } from '../farmer-service.service';

@Component({
  selector: 'app-view-and-update-profile',
  templateUrl: './view-and-update-profile.component.html',
  styleUrls: ['./view-and-update-profile.component.scss']
})
export class ViewAndUpdateProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private farmerService:FarmerServiceService) { 
    this.getFarmer();
  }
  UpdateProfile: FormGroup;
  farmer:Farmer = new Farmer();

  ngOnInit(): void {
    this.UpdateProfile = this.fb.group({
      aadharNumber: new FormControl('null',[Validators.required] ),
      farmerId: new FormControl('null', [Validators.required]),
      farmerName: new FormControl('null',[Validators.required, Validators.pattern("^([A-Za-z])+(( )([A-Za-z])+)*$")]),
      mobileNumber: new FormControl('null',[Validators.required, Validators.pattern("^[1-9][0-9]{9}$")]),
      accountNumber: new FormControl('null', [Validators.required, Validators.pattern('^[1-9][0-9]{10,15}$') ]),
      password: new FormControl('null', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z]).{6,12}$")]),
      ifsc: new FormControl('null', [Validators.required , Validators.pattern("^[A-Z]{4}[0-9]{7}$")]),
      bankName: new FormControl('null', [Validators.required, Validators.pattern("^([A-Za-z])+(( )([A-Za-z])+)*$")]),
      securityQuestion: new FormControl('null', [Validators.required]),
      answer: new FormControl('null', [Validators.required, Validators.pattern("^[A-Za-z0-9]{3,20}$")])
    });
  }
onSubmit(){
  console.log(this.UpdateProfile);
  console.log(this.farmer);
  this.farmerService.updateFarmer(this.farmer).subscribe(data=>{
    console.log(data);
    if(data==null){
      alert("Profile already updated");
      this.router.navigate(['/farmer']);
    }
      
    },
    (error) => {
     alert("Profile updated successfully");
      this.router.navigate(['/farmer']);
     
     });
 
}
onCancel(){
  this.router.navigate(['/farmer']);
}
getFarmer(){
  this.farmerService.getFarmer().subscribe(data=>{
    this.farmer=data;
    console.log(this.farmer);
  });
}
}
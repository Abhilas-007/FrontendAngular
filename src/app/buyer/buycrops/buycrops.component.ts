import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BuyerRequest } from 'src/app/shared/models/BuyerRequest';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';
import { BuycropsService } from './Buycrops.service';
import { RequestServiceService } from './requestService.service';

@Component({
  selector: 'app-buycrops',
  templateUrl: './buycrops.component.html',
  styleUrls: ['./buycrops.component.scss']
})
export class BuycropsComponent implements OnInit {
mandipincode:any;
farmer1:FarmerTransaction=new FarmerTransaction();
farmer:FarmerTransaction=new FarmerTransaction();

 req: BuyerRequest[] = [];
 id=Number(localStorage.getItem('userId'));
 //request1: BuyerRequest[]=[{cropClass:'',cropName:'',quantity:0,buyerId:0,mandiPincode:0}];
public request1: BuyerRequest[]=[];

buyerId=Number(localStorage.getItem('buyerId'));
  constructor(private farmerTran:BuycropsService,private saverequest:RequestServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  getDetails(){
    this.farmerTran.getCrop(this.mandipincode).subscribe(data=>{
     
        this.farmer1=data;
      console.log(this.farmer1)
      if(this.farmer1.mandiPincode == 0){
        alert("Invalid pincode");
      }
      else{
      this.farmer=this.farmer1;
      }
      },
      
      error => {console.log(error);
        window.alert("Invalid mandi pincode")}
    );
    
  }
  
saveDetails(a:BuyerRequest) {
  this.saverequest.saveRequest(a).subscribe(data => {
    console.log(data);
    
   
  },
    error => console.log(error));
}
  onMandiSearch(){
  this.getDetails();
  
  }
  onSubmit(){
    
    if(this.mandipincode!=null && this.request1.length!=0){
      alert("do you want to continue");
      for(let a of this.request1){
        this.saveDetails(a);
      }
      alert("Request Added Successfully")
    }
    else
    {
      alert("enter mandipincode and choose details")
    }

    this.router.navigate(['/buyer/buycrops']);
    

  }
    saveData(quantity:any, crop:FarmerTransaction){
      if(quantity.value!=0){
     alert("RequestAdded");
      console.log(quantity.value);
      //console.log(checked.checked);
      //console.log(crop);
      this.request1.push(new BuyerRequest(crop.cropName,crop.cropClass,quantity.value,this.id,this.mandipincode));
      console.log(this.request1);
      }
      else{
        alert("enter quantity");
      }
  }
  
}

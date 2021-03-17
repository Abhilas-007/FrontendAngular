import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
import { BuyerRequest } from 'src/app/shared/models/BuyerRequest';
import { FarmerTransaction } from 'src/app/shared/models/farmerTransaction';
import { BuycropsService } from './Buycrops.service';

@Component({
  selector: 'app-buycrops',
  templateUrl: './buycrops.component.html',
  styleUrls: ['./buycrops.component.scss']
})
export class BuycropsComponent implements OnInit {
mandipincode:any;
farmer1:FarmerTransaction=new FarmerTransaction();
farmer:FarmerTransaction=new FarmerTransaction();
request:BuyerRequest=new BuyerRequest();
details:BuyerRequest[]=[{buyerId :Number(localStorage.getItem('buyerId')),mandiPincode:0,cropName:'',cropClass:'',quantity:0}];
products: BuyerRequest[] = [];
  constructor(private farmerTran:BuycropsService) { }

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
  onMandiSearch(){
  this.getDetails();
  
  }
  onSubmit(){
    
    if(this.mandipincode!=null ){
      alert("do you want to continue");
    }
    
    else
    {
      alert("enter mandipincode and choose details")
    }
console.log(this.details);

  }
  
  
  
}

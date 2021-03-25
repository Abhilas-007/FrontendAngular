import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { BuyerRequest } from 'src/app/shared/models/BuyerRequest';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';
import { DialogService } from '../dialog.service';
import { BuycropsService } from './Buycrops.service';
import { RequestServiceService } from './requestService.service';

@Component({
  selector: 'app-buycrops',
  templateUrl: './buycrops.component.html',
  styleUrls: ['./buycrops.component.scss']
})
export class BuycropsComponent implements OnInit {
mandipincode:any;
farmer1:FarmerTransaction[]=[];
farmer:FarmerTransaction[]=[];
 req: BuyerRequest[] = [];
 id=Number(localStorage.getItem('userId'));
 //request1: BuyerRequest[]=[{cropClass:'',cropName:'',quantity:0,buyerId:0,mandiPincode:0}];
public request1: BuyerRequest[]=[];

buyerId=Number(localStorage.getItem('buyerId'));
  constructor(private farmerTran:BuycropsService,private saverequest:RequestServiceService,private dialog:DialogService,private router:Router) { }

  ngOnInit(): void {
  }
  getDetails(){
    this.farmerTran.getCrop(this.mandipincode).subscribe(data=>{
     

        this.farmer=data;
      console.log(this.farmer)
      if(Object.keys(this.farmer).length == 0){
        alert("No details found with mandi");

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
    this.dialog.openConfirmDialog('Are you sure you want to continue?')
      .afterClosed().subscribe(res => {
        if (res) {
    //if(this.mandipincode!=null && this.request1.length!=0){
    //  alert("do you want to continue");
      for(let a of this.request1){
        this.saveDetails(a);
      }
      alert("Request Added Successfully")
      this.router.navigate(['/buyer']);
    }
      
    else
    {
      alert("Request canceled")
    }
      
  }
      );

}

    saveData(quantity:any, crop:FarmerTransaction){
      if(quantity.value!=0){
     alert("RequestAdded");
      console.log(quantity.value);
      //console.log(checked.checked);
      //console.log(crop);
      this.request1.push(new BuyerRequest(crop.cropClass,crop.cropName,quantity.value,this.id,this.mandipincode));
      console.log(this.request1);
      }
      else{
        alert("enter quantity");
      }
  }
  
}

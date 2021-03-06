import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { Buyer } from 'src/app/shared/buyer';
import { BuyerService } from 'src/app/shared/buyer.service';


@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.scss']
})
export class BuyerSignupComponent implements OnInit {
  hide:boolean=true;

  buyer:Buyer=new Buyer();
  
   
    constructor(private buyerService:BuyerService,private router:Router) { }
  saveBuyer(){
    this.buyerService.createEmployee(this.buyer).subscribe(data=>{
      console.log(data);
     // this.getNew();
    },
      error=>console.log(error));
  }
    ngOnInit(): void {
    }
    onSubmit(){
      if(this.buyer.password===this.buyer.confirmPassword){
  console.log(this.buyer);
 
  this.saveBuyer();
  this.router.navigate(['/']);
      }
  else
  alert("ConfirmPassword doesn't match with Password")
    }
   // getNew(){
    //  this.router.navigate(['/']);
   // }
toggleEye():void{
  this.hide=!this.hide;
}
}

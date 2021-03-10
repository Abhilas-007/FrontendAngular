import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { Buyer } from 'src/app/shared/buyer';
import { BuyerService } from 'src/app/shared/buyer.service';
import { BuyerSignup } from 'src/app/shared/models/BuyerSignup';


@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.scss']
})
export class BuyerSignupComponent implements OnInit {
  hide: boolean = true;
  buyerId;
  buyer: BuyerSignup = new BuyerSignup();
  confirmPassword: string;

  constructor(private buyerService: BuyerService, private router: Router) { }
  saveBuyer() {
    this.buyerService.createBuyer(this.buyer).subscribe(data => {
      console.log(data);
      this.buyerId=data;
      alert("Signup Successfully Please remember Your id for Login :"+ this.buyerId);
    },
      error => console.log(error));
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.buyer);
    if (this.buyer.password === this.confirmPassword) {
     
      this.saveBuyer();
      
      this.router.navigate(['/']);
    }
    else
      alert("ConfirmPassword doesn't match with Password")
  }
  // getNew(){
  //  this.router.navigate(['/']);
  // }
  toggleEye(): void {
    this.hide = !this.hide;
  }
}

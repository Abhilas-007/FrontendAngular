import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerRequest } from 'src/app/shared/models/BuyerRequest';
import { BuyerRequest2 } from 'src/app/shared/models/BuyerRequest2';
import { ClerkService } from '../clerk.service';

@Component({
  selector: 'app-clerk-buyer-request-list',
  templateUrl: './clerk-buyer-request-list.component.html',
  styleUrls: ['./clerk-buyer-request-list.component.scss']
})
export class ClerkBuyerRequestListComponent implements OnInit {

  requestList: BuyerRequest2[]=[];
  request: BuyerRequest2=null;
  e: boolean = false;

  constructor(private router: Router, private clerkService:ClerkService) { }

  ngOnInit(): void {
    this.requestList=null;
this.getRequestList();
  }
  getRequestList(): void{
    this.clerkService.getRequestList(localStorage.getItem('userId')).subscribe((data)=> {
      this.requestList=data;
    },
    (error)=>{
      this.e=true;
      alert("No requests are there!");
      this.router.navigate(['/clerk'])
    })
  }
  getRequestDetails(req: BuyerRequest2){
    this.request=req;
  }

  acceptRequest(req: BuyerRequest2): void {
console.log(req);
  }

  rejectRequest(): void {

  }
}

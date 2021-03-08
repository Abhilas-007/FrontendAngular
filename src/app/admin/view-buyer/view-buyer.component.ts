import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/shared/models/Buyer';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-buyer',
  templateUrl: './view-buyer.component.html',
  styleUrls: ['./view-buyer.component.scss']
})
export class ViewBuyerComponent implements OnInit {

  mandiPincode: any;
  adminId: any;
  allBuyers: Buyer[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminId = localStorage.getItem('userId');
  }

  getBuyers()
  {
    this.adminService.getBuyersByAdminIdAndMandiPincode(this.adminId,this.mandiPincode)
    .subscribe(data => 
      {this.allBuyers = data},
      error => {console.log(error); alert("Invalid mandi pincode.")}
      );
  }

  onMandiPincodeSearch()
  {
    this.getBuyers();
  }

}

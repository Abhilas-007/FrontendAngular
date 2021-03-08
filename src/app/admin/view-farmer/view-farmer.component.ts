import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/shared/models/Farmer';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-farmer',
  templateUrl: './view-farmer.component.html',
  styleUrls: ['./view-farmer.component.scss']
})
export class ViewFarmerComponent implements OnInit {

  mandiPincode: any;
  adminId: any;
  allFarmers: Farmer[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminId = localStorage.getItem('userId');
  }

  getFarmers()
  {
    this.adminService.getFarmersByAdminIdAndMandiPincode(this.adminId,this.mandiPincode)
    .subscribe(data => 
      {this.allFarmers = data},
      error => {console.log(error); alert("Invalid mandi pincode.")}
      );
  }

  onMandiPincodeSearch()
  {
    this.getFarmers();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/shared/models/Admin';
import { Crop } from 'src/app/shared/models/Crop';
import { AdminService } from '../admin.service';
import { CropService } from '../crop.service';

@Component({
  selector: 'app-msp-tab',
  templateUrl: './msp-tab.component.html',
  styleUrls: ['./msp-tab.component.scss']
})
export class MspTabComponent implements OnInit {

  stateName: string = "";
  lowerCaseState: string = "";
  adminId: any;
  adminObj: Admin = new Admin();
  i: number = 0;
  j: number = 0;

  admins: Admin[] = [];
  crops: Crop[] = [];

  allAdmins: Admin[] = [];
  allCrops: Crop[] = [];

  constructor(private adminService: AdminService,
    private cropService: CropService, private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
    this.getCrops();
  }

  getAdmins(): void {
    this.adminService.getAdmins().subscribe(data => {
      for (let a of data) {
        this.allAdmins[this.i] = a;
        this.i = this.i + 1;
      }
      this.allAdmins = data;
    }, error => 
    {
      console.log(error);
      alert("Error in getting admins. Try again later.");
      this.router.navigate(['/farmer']);
    }  
    );
  }

  getCrops(): void {
    this.cropService.getCrops().subscribe(data => {
      for (let a of data) {
        this.allCrops[this.j] = a;
        this.j = this.j + 1;
      }
      this.allCrops = data;
    }, error => 
    {
      console.log(error);
      alert("Error in getting crops. Try again later.");
      this.router.navigate(['/farmer']);
    }
    );
  }

  onStateSearch() {
    //to find the Admin object having state same as the entered state
    this.lowerCaseState = this.stateName.toLowerCase();
    this.adminObj = this.allAdmins.filter(element => (element.state == this.lowerCaseState))[0];

    if (typeof this.adminObj === 'undefined' && this.stateName === "") 
    {
      //if a wrong state name is entered or no state name is entered then show alert message
      alert("Invalid state name.");
      this.crops = null;
    }
    else if(typeof this.adminObj === 'undefined' && this.stateName != null)
    {
      alert("Entered state name not found.");
      this.crops = null;
    }
    else 
    {
      //assign the above admin object's admid ID to the adminId variable
      this.adminId = this.adminObj.adminId;

      //find all crops having the above adminId
      this.crops = this.allCrops.filter(element => (element.adminId == this.adminId));
    }

  }

}

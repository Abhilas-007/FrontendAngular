import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/models/Admin';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-view-all-admin-details',
  templateUrl: './view-all-admin-details.component.html',
  styleUrls: ['./view-all-admin-details.component.scss']
})
export class ViewAllAdminDetailsComponent implements OnInit {

  admins:Array<Admin>;
  constructor(private sAdminService:SuperAdminService) { }

  ngOnInit(): void {
    this.show();
  }

  show(){
    this.sAdminService.viewAllAdmins().subscribe(
      data=>{this.admins=data,
      console.log(this.admins)
    },
      error=>console.log(error)
    )
  }



}

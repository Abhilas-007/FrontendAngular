import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/shared/models/Admin';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private router: Router,private sService: SuperAdminService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.sService.updateAdmin(this.admin).subscribe(data => {
      this.admin = data;
    });
  }

  onCancel(){
    this.router.navigate(['/superAdmin']);
  }

}

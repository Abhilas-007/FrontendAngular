import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/shared/models/Admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  admin: Admin = new Admin();
  hide: boolean = true;

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(){
    this.adminService.getAdmin(localStorage.getItem('userId')).subscribe(data => {
      this.admin = data;
    });
  }

  onCancel(){
    this.router.navigate(['/admin']);
  }

}

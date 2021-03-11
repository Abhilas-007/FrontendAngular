import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Clerk } from 'src/app/shared/models/Clerk';
import { Mandi } from 'src/app/shared/models/Mandi';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-mandi',
  templateUrl: './mandi.component.html',
  styleUrls: ['./mandi.component.scss']
})
export class MandiComponent implements OnInit {

  mandi: Mandi = new Mandi();
  clerk: Clerk = new Clerk();
  hide: boolean = true;

  constructor(private router: Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.mandi.mandiPincode = null;
    this.mandi.storage = null;
    this.clerk.clerkId = null;
    this.clerk.clerkName = null;
    this.clerk.mobileNumber = null;
    this.clerk.password = null;
    this.mandi.adminId = null;
  }

  onSubmit(){
    this.mandi.clerk = this.clerk;
    console.log(this.mandi);
    this.adminService.addMandi(this.mandi).subscribe(data => {
      this.mandi = data;
    });
    window.alert("Mandi Added Successfuly");
    this.router.navigate(['/admin/addMandi']);
  }



}

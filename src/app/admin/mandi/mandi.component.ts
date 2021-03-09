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


  constructor(private router: Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.mandi.clerk = new Clerk();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.adminService.addMandi(form.value).subscribe(data => {
      this.mandi = data;
    });
  }

  onCancel(){
    this.router.navigate(['/admin']);
  }

}

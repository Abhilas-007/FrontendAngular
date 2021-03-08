import { Component, OnInit } from '@angular/core';
import { Clerk } from 'src/app/shared/models/Clerk';
import { ViewClerkService } from './viewClerk.service';

@Component({
  selector: 'app-view-clerk',
  templateUrl: './view-clerk.component.html',
  styleUrls: ['./view-clerk.component.scss']
})
export class ViewClerkComponent implements OnInit {

  clerk:Clerk[]=[];
  constructor(private clerkService:ViewClerkService) { }

adminId=localStorage.getItem('userId');

  //adminId="11";
  ngOnInit(): void {
    this.getClerks();
  }
  private getClerks(){
    this.clerkService.getClerks(this.adminId).subscribe(data=>{
      this.clerk=data;
    });
  }
}

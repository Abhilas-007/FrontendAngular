import { Component, OnInit } from '@angular/core';
import { Clerk } from 'src/app/shared/models/Clerk';
import { Form, NgForm } from '@angular/forms';
import { UpdateclerkService } from './updateclerk.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-clerk',
  templateUrl: './update-clerk.component.html',
  styleUrls: ['./update-clerk.component.scss']
})
export class UpdateClerkComponent implements OnInit {
  
  hide:boolean=true;
clerkid:any;
clerks:Clerk =new Clerk();
  constructor(private updateClerk:UpdateclerkService,private router: Router) { }

  ngOnInit(): void {
  }
  getclerks(){
    this.updateClerk.getClerk(this.clerkid).subscribe(data=>{
     
     
      this.clerks=data},
      
      error => {console.log(error);
        window.alert("Invalid clerk id")}
    );
    
  }
  onclerkIdSearch(){
    this.getclerks();
    
  }
  onSubmit(form:NgForm){
    console.log(form.value);

    this.updateClerk.updateClerk(form.value).subscribe(data => 
      {
        this.clerks=data;
        if(this.clerks.clerkName == null){
          window.alert("update failed");
          }
      }, error => console.log(error));
if(this.clerks.clerkName == null){
window.alert("update failed");
}
else{
      window.alert("Details Updated Successfuly");
     form.reset();
    this.clerks=null;
}

  }
  }

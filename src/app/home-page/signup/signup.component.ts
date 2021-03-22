import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from 'src/app/shared/models/Farmer';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  hide: boolean = true;
  hide1: boolean = true;
  confirmPassword: string='';
  password:string='';
  stringJson:string;
  farmerId;
  farmer:Farmer= new Farmer();
  constructor(private employeeService: SignupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  onSubmit(form:NgForm){
    if(this.farmer.password===this.confirmPassword){
      console.log(form);
    this.saveEmployee();
    }
    else
    alert("Password not matched");
    
   }
   saveEmployee(){
    this.employeeService.createEmployee(this.farmer).subscribe(data =>{
      if(data==null){
        alert("Aadhar number already exists.");
        window.location.reload();
     }
     if(data!=null){
       this.farmerId=data;
       console.log(this.farmerId);
        this.goToEmployeeList();
     } 
    },
    (error)=>{
      console.log(error);
      alert("Aadhar number already exists.");
      this.router.navigate(['/signup'])
     });
  }
  goToEmployeeList(){
    alert("Sign up Successfully"+"\n"+"Your Farmer Id is :"+this.farmerId);
    this.router.navigate(['']);
  }

   myFunction() {
     this.hide = !this.hide;
   }
   
}
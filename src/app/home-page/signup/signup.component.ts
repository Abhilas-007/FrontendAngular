import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/shared/models/Farmer';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  hide: boolean = true;
  confirmPassword: string='';
  password:string='';
  
  farmer:Farmer= new Farmer();
  constructor(private employeeService: SignupService, private router: Router) { }

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
      console.log(data);
      this.goToEmployeeList();
    })
  }
  goToEmployeeList(){
    this.router.navigate(['']);
  }

   myFunction() {
     this.hide = !this.hide;
   }
}
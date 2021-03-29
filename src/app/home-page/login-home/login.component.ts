import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  b: {};
  map = new Map();
  loginForm: FormGroup = new FormGroup({
    userType: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private ls: LoginServiceService, private _router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    this.map.set('userId', this.loginForm.controls['id'].value);
    this.map.set('password', this.loginForm.controls['password'].value);
    this.validateLogin();
  }
  toggleEye(): void {
    this.hide = !this.hide;
  }
  validateLogin(): void {
    if (this.loginForm.controls['userType'].value == 'admin') {
      this.ls.loginAdmin(this.map).subscribe(
        (data) => {
          if (data != null) {
            console.log('successful login');
            localStorage.setItem('userId', this.loginForm.controls['id'].value);
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('userType', 'admin');
            this._router.navigate(['/admin']);
          }
          if (data == null) {
            alert('invalid credentials');
            this.loginForm.reset();
          }
        },
        (error) => {
          console.log(error);
          alert("Wrong userId or password");
          this.loginForm.reset();
        }
      );
    }
    if (this.loginForm.controls['userType'].value == 'farmer') {
      this.ls.loginFarmer(this.map).subscribe(
        (data) => {
          if (data != null) {
            console.log('successful login');
            localStorage.setItem('userId', this.loginForm.controls['id'].value);
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('userType', 'farmer');
            this._router.navigate(['/farmer']);
          }
          if (data == null) {
            alert('invalid credentials');
            this.loginForm.reset();
          }
        },
        (error) => {
          console.log(error);
          alert("Wrong userId or password");
          this.loginForm.reset();
        }
      );
    }
    if (this.loginForm.controls['userType'].value == 'buyer') {
      this.ls.loginBuyer(this.map).subscribe(
        (data) => {
          if (data != null) {
            console.log('successful login');
            localStorage.setItem('userId', this.loginForm.controls['id'].value);
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('userType', 'buyer');
            this._router.navigate(['/buyer']);
          }
          if (data == null) {
            alert('invalid credentials');
            this.loginForm.reset();
          }
        },
        (error) => {
          console.log(error);
          alert("Wrong userId or password");
          this.loginForm.reset();
        }
      );
    }
    if (this.loginForm.controls['userType'].value == 'clerk') {
      this.ls.loginClerk(this.map).subscribe(
        (data) => {
          if (data != null) {
            console.log(data);
            console.log('successful login');
            localStorage.setItem('userId', this.loginForm.controls['id'].value);
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('userType', 'clerk');
            this._router.navigate(['/clerk']);
          }
          if (data == null) {
            console.log(data);
            alert('invalid credentials');
            this.loginForm.reset();
          }
        },
        (error) => {
          console.log(error);
          alert("Wrong userId or password");
          this.loginForm.reset();
        }
      );
    }
    if (this.loginForm.controls['userType'].value == 'sAdmin') {
      this.ls.loginSAdmin(this.map).subscribe(
        (data) => {
          if (data != null) {
            console.log('successful login');
            localStorage.setItem('userId', this.loginForm.controls['id'].value);
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('userType', 'sAdmin');
            this._router.navigate(['/superAdmin']);
          }
          if (data == null) {
            alert('invalid credentials');
            this.loginForm.reset();
          }
        },
        (error) => {
          console.log(error);
          alert("Wrong userId or password");
          this.loginForm.reset();
        }
      );
    }
  }
}

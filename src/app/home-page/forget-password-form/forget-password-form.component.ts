import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss'],
})
export class ForgetPasswordFormComponent implements OnInit {
  map = new Map();
  passForm: FormGroup = new FormGroup({
    userType: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });
  constructor(private ls: LoginServiceService, private _router: Router) {}

  ngOnInit(): void {}
  Submit(): void {
    this.map.set('userType', this.passForm.controls['userType'].value);
    localStorage.setItem('userType', this.passForm.controls['userType'].value);
    localStorage.setItem('userId', this.passForm.controls['userId'].value);
    let str = localStorage.getItem('userType');
    console.log(str);
    this.map.set('userId', this.passForm.controls['userId'].value);
    this.ls.resetPass(this.map).subscribe(
      (data) => {
        if (data != null) {
          console.log('Id exists');
          console.log(str);
          if (str == 'buyer' || str == 'farmer') {
            this._router.navigate(['sqcheck']);
          } else {
            console.log(str);
            this.ls.sendPasswordMail(str).subscribe((data) => {
              if (data != null) {
                alert('password sent to your registered mail id');
                this._router.navigate(['']);
              } else {
                alert(
                  'your request for password change couldnt be processed due to some error, /n please try again'
                );
                this._router.navigate(['']);
              }
            });
          }
        } else if (data == null) {
          localStorage.setItem('userId', null);
          alert('Wrong id, or user type');
          this.passForm.reset();
        }
      },
      (error) => {
        alert('Please try again with correct id or user type');
        this.passForm.reset();
        console.log(error);
      }
    );
  }
}

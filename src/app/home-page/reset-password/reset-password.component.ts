import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = true;
  pass: string;
  resetPassForm: FormGroup ;
  constructor(private ls: LoginServiceService, private _router: Router) {
    this.resetPassForm=new FormGroup({
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  toggleEye(): void {
    this.hide = !this.hide;
  }
  matchPassword(pass1, pass2): boolean {
    if (pass1 != pass2) return false;
    else return true;
  }
  submit(): void {
    this.pass =this.resetPassForm.controls['password1'].value;
    this.ls
      .changePassword(this.pass)
      .subscribe(
        (data) => {
          if (data != null) {
            this._router.navigate(['passwordChangeSuccess']);
          } else if (data == null) {
            this._router.navigate(['passwordChangeFailure']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

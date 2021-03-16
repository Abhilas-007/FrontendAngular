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
  hide2: boolean = true;
  pass: string;
  resetPassForm: FormGroup;
  constructor(private ls: LoginServiceService, private _router: Router) {
    this.resetPassForm = new FormGroup({
      password1: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z]).{6,12}$")]),
      password2: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z]).{6,12}$")]),
    });
  }

  ngOnInit(): void {}

  toggleEye(): void {
    this.hide = !this.hide;
  }
  toggleEye2(): void {
    this.hide2 = !this.hide2;
  }
  matchPassword(pass1, pass2): boolean {
    if (pass1 != pass2) return false;
    else return true;
  }
  validatePassWord(): boolean {
    if (
      this.resetPassForm.controls['password1'].value.length >= 6 &&
      this.resetPassForm.controls['password1'].value <= 12
    )
      return true;
    else return false;
  }
  submit(): void {
    this.pass = this.resetPassForm.controls['password1'].value;
    this.ls.changePassword(this.pass).subscribe(
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

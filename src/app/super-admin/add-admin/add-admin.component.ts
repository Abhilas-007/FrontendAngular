import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  map = new Map();
  addAdminForm: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    state: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")])
  });
  constructor(private _router: Router, private sAService: SuperAdminService) {}

  ngOnInit(): void {}
  submit(): void {
    this.map.set('emailId', this.addAdminForm.controls['emailId'].value);
    this.map.set('state', this.addAdminForm.controls['state'].value);
    this.sAService.addAdmin(this.map).subscribe(
      (data) => {
        if (data == null) {
          alert('admin couldnt be added, please try again');
          this.addAdminForm.reset();
        } else if (data != null) {
          alert('Admin Added successfully');
          this._router.navigate(['/superAdmin']);
        }
      },
      (error) => {
        alert("try again, couldnt process your request");
        console.log(error);
        this._router.navigate(['/superAdmin']);
      }
    );
  }
  Cancel(): void{
    this._router.navigate(['/superAdmin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-security-question-check',
  templateUrl: './security-question-check.component.html',
  styleUrls: ['./security-question-check.component.scss'],
})
export class SecurityQuestionCHeckComponent implements OnInit {
  map = new Map();
  sqCheckForm: FormGroup = new FormGroup({
    sQ: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  });

  constructor(private ls: LoginServiceService, private _router: Router) {}

  ngOnInit(): void {}
  submit(): void {
    this.map.set('sQuestion', this.sqCheckForm.controls['sQ'].value);
    this.map.set('answer', this.sqCheckForm.controls['answer'].value);
  this.ls.checkSecurity(this.map).subscribe(
    (data)=> {
      if(data==null){
        alert('wrong security question or answer');
        localStorage.setItem('userType', null);
        localStorage.setItem('userId', null);
        this._router.navigate(['']);
      }
      else if(data!=null){
        this._router.navigate(['resetPass']);
      }
    } 
    );
  }
  
}

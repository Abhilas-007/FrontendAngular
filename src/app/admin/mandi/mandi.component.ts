import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mandi } from 'src/app/shared/models/Mandi';

@Component({
  selector: 'app-mandi',
  templateUrl: './mandi.component.html',
  styleUrls: ['./mandi.component.scss']
})
export class MandiComponent implements OnInit {

  mandi: Mandi = new Mandi();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

  onCancel(){
    this.router.navigate(['/admin']);
  }

}

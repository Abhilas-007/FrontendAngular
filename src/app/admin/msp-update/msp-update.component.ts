import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crop } from 'src/app/shared/models/Crop';

@Component({
  selector: 'app-msp-update',
  templateUrl: './msp-update.component.html',
  styleUrls: ['./msp-update.component.scss']
})
export class MspUpdateComponent implements OnInit {

  crop: Crop = new Crop();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}

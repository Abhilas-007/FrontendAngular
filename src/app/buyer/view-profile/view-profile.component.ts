import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Buyer } from 'src/app/shared/models/Buyer';
import { BuyerServiceService } from '../buyer-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  buyer: Buyer = new Buyer();
  @Output() formSubmit: EventEmitter<Buyer> = new EventEmitter<Buyer>();
  hide: boolean = true;

  constructor(private buyerService: BuyerServiceService) { }

  ngOnInit(): void {
    this.buyer = null;
    this.getBuyer();
  }

  getBuyer(){
    this.buyerService.getBuyer(localStorage.getItem('userId')).subscribe(data => {
      this.buyer=data;
    });
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.buyerService.updateBuyer(form.value).subscribe(data => 
      {
        this.buyer=data;
      }, error => console.log(error));

      window.alert("Details Updated Successfuly");
  }

}

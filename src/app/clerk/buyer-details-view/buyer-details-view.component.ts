import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/shared/models/Buyer';
import { BuyerTransaction } from 'src/app/shared/models/BuyerTransaction';
import { ClerkService } from '../clerk.service';

@Component({
  selector: 'app-buyer-details-view',
  templateUrl: './buyer-details-view.component.html',
  styleUrls: ['./buyer-details-view.component.scss']
})
export class BuyerDetailsViewComponent implements OnInit {

  public lists:Array<number>;
  buyer: Buyer = new Buyer();
  transactions: BuyerTransaction[]=[];

  constructor(private clerkService: ClerkService) { }

  ngOnInit(): void {
    this.clerkService.getBuyerIds(localStorage.getItem('userId')).subscribe(data => {
      this.lists = data;
    });
  }

  getBuyer(buyerId: number){
    this.clerkService.getBuyerDetails(buyerId).subscribe(data => {
      this.buyer = data;
      console.log(this.buyer);
    });

    this.clerkService.getBuyerTransactions(localStorage.getItem('userId'),buyerId).subscribe(data => {
      this.transactions = data;
      console.log(data);
    });
  }

}

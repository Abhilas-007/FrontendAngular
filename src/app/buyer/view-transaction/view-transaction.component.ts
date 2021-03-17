import { Component, OnInit } from '@angular/core';
import { BuyerTransaction } from 'src/app/shared/models/BuyerTransaction';
import { BuyerServiceService } from '../buyer-service.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {
  transaction: BuyerTransaction[]=[];
  constructor(private buyerService: BuyerServiceService) { }

  ngOnInit(): void {
  }
  private getTransaction(){
    this.buyerService.getTransaction().subscribe(data=>{
      this.transaction=data;
    });
  }
}

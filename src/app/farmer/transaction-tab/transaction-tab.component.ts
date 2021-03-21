import { Component, OnInit } from '@angular/core';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';
import { FarmerServiceService } from '../farmer-service.service';

@Component({
  selector: 'app-transaction-tab',
  templateUrl: './transaction-tab.component.html',
  styleUrls: ['./transaction-tab.component.scss']
})
export class TransactionTabComponent implements OnInit {

  transactions: FarmerTransaction[]=[];
  
  constructor(private farmerService:FarmerServiceService) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions():void{
    this.farmerService.getTransactions().subscribe(data =>{
      this.transactions=data;
    },
    error=>{
      console.log(error);
    })
  }

}

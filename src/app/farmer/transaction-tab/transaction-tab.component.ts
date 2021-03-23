import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';
import { FarmerServiceService } from '../farmer-service.service';

@Component({
  selector: 'app-transaction-tab',
  templateUrl: './transaction-tab.component.html',
  styleUrls: ['./transaction-tab.component.scss']
})
export class TransactionTabComponent implements OnInit {

  transactions: FarmerTransaction[]=[];
  
  constructor(private farmerService:FarmerServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions():void{
    this.farmerService.getTransactions().subscribe(data =>{
      if(data!=null)
      this.transactions=data;
      else {
        alert("No transactions to show");
        this.router.navigate(['/farmer']);
      }
    },
    error=>{
      alert("No transactions to show");
      this.router.navigate(['/farmer']);
      console.log(error);
    })
  }

}

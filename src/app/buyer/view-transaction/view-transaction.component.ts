import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerTransaction } from 'src/app/shared/models/BuyerTransaction';
import { BuyerServiceService } from '../buyer-service.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {
  transaction: BuyerTransaction[]=[];
  constructor(private buyerService: BuyerServiceService, private router: Router) {
    this.getTransaction();
   }

  ngOnInit(): void {
  }
  private getTransaction(){
    this.buyerService.getTransaction(localStorage.getItem('userId')).subscribe(data=>{
      console.log(data);
     if(data!=null){
        this.transaction=data;
        
        for(let i=0; i<this.transaction.length;i++){
          console.log(this.transaction[i]);
        }
      }
    else{
      alert("No previous transaction available.");
      this.router.navigate(['/buyer']);
     
    }
    },
    (error) => {
      console.log(error);
      alert("No previous transaction available.");
      this.router.navigate(['/buyer'])
    }
    );
}
}
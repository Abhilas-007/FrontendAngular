import { Component, OnInit } from '@angular/core';
import { Farmer1 } from 'src/app/shared/models/Farmer1';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';
import { ClerkService } from '../clerk.service';

@Component({
  selector: 'app-farmer-details-view',
  templateUrl: './farmer-details-view.component.html',
  styleUrls: ['./farmer-details-view.component.scss']
})
export class FarmerDetailsViewComponent implements OnInit {

  public lists:Array<number>;
  farmer: Farmer1 = new Farmer1();
  transactions: FarmerTransaction[]=[];

  constructor(private clerkService: ClerkService) { }

  ngOnInit(): void {
    this.clerkService.getFarmerIds(localStorage.getItem('userId')).subscribe(data => {
      this.lists = data;
    });
  }

  getFarmer(farmerId: number){
    this.clerkService.getFarmerDetails(farmerId).subscribe(data => {
      this.farmer = data;
      console.log(this.farmer);
    });

    this.clerkService.getTransactions(localStorage.getItem('userId'),farmerId).subscribe(data => {
      this.transactions = data;
      console.log(data);
    });
  }

}

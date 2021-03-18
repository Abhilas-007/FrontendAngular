import { Component, OnInit } from '@angular/core';
import { Farmer1 } from 'src/app/shared/models/Farmer1';
import { ClerkService } from '../clerk.service';

@Component({
  selector: 'app-farmer-details-view',
  templateUrl: './farmer-details-view.component.html',
  styleUrls: ['./farmer-details-view.component.scss']
})
export class FarmerDetailsViewComponent implements OnInit {

  public lists:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  farmer: Farmer1 = new Farmer1();

  constructor(private clerkService: ClerkService) { }

  ngOnInit(): void {
  }

  getFarmer(farmerId: number){
    this.clerkService.getFarmerDetails(farmerId).subscribe(data => {
      this.farmer = data;
      console.log(this.farmer);
    });
  }

}

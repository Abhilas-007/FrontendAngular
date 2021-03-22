import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClerkCrop } from 'src/app/shared/models/ClerkCrop';
import { CropsToBuy } from 'src/app/shared/models/CropsToBuy';
import { ClerkBuyCropsService } from '../clerkBuyCrops.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirm-credit',
  templateUrl: './confirm-credit.component.html',
  styleUrls: ['./confirm-credit.component.scss']
})
export class ConfirmCreditComponent implements OnInit {

  allCropItems: CropsToBuy[] = [{ cropName: '', cropQty: 0 }];
  allClerkCropItems: ClerkCrop[] = [{ farmerId: 0, clerkId: '', cropName: '', cropQty: 0 }];
  totalPrice: number;
  allCosts: number[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private clerkService: ClerkBuyCropsService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.dataService.getItems().length; i++) {
      this.allCropItems[i] = this.dataService.getItems()[i];
    }
    for (let i = 0; i < this.dataService.getClerkCropItems().length; i++) {
      this.allClerkCropItems[i] = this.dataService.getClerkCropItems()[i];
      this.allCosts[i] = this.dataService.getAllCosts()[i];
    }
    this.clerkService.getTotalPrice(this.allClerkCropItems)
    .subscribe(
      data => 
      { 
        if(data != 0)
        {
          this.totalPrice = data; 
        }
        else
        {
          alert("Error in getting the total price.");
          this.dataService.allCrops = [];
          this.dataService.allClerkCropItems = [];
          this.router.navigate(['/clerk/buyCropsTab']);
        }
      }
    );
  }

  onCredit() {
    this.clerkService.buyCrops(this.allClerkCropItems).subscribe(
      data => 
      {
        console.log(data);
        if(data == false)
        {
          alert("Failed to buy crops. Try again later.");
          this.dataService.allCrops = [];
          this.dataService.allClerkCropItems = [];
          this.router.navigate(['/clerk/buyCropsTab']);
        }
        else
        {
          this.dataService.allCrops = [];
          this.dataService.allClerkCropItems = [];
          alert("Amount credited successfully!!");
          this.router.navigate(['/clerk/buyCropsTab']);
        }
      }
    );
  }

  onCancel() {
    this.dataService.allCrops = [];
    this.dataService.allClerkCropItems = [];
    alert("Request cancelled.");
    this.router.navigate(['/clerk/buyCropsTab']);
  }

}


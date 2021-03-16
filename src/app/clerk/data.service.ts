import { Injectable } from "@angular/core";
import { ClerkCrop } from "../shared/models/ClerkCrop";
import { CropsToBuy } from "../shared/models/CropsToBuy";

@Injectable({
    providedIn: 'root'
})

export class DataService 
{
    public allCrops: CropsToBuy[] = [];
    public amount: any;
    public allClerkCropItems: ClerkCrop[] = [];
    public costs: number[] = [];

    addItem(item: CropsToBuy) {
        this.allCrops.push(item);
    }

    getItems(): CropsToBuy[] {
        return this.allCrops;
    }

    addClerkCropItem(item: ClerkCrop) {
        this.allClerkCropItems.push(item);
    }

    getClerkCropItems(): ClerkCrop[] {
        return this.allClerkCropItems;
    }

    addCost(cost: number)
    {
        this.costs.push(cost);
    }

    getAllCosts(): number[]
    {
        return this.costs;
    }
}
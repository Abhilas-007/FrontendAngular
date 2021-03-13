export class ClerkCrop{
    farmerId: number;
    clerkId: string;
    cropName: string;
    cropQty: number;

    constructor(farmerId: number, clerkId: string, cropName: string, cropQty: number)
    {
        this.farmerId = farmerId;
        this.clerkId = clerkId;
        this.cropName = cropName;
        this.cropQty = cropQty;
    }
}
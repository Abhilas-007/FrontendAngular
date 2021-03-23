
export class BuyerRequest2 {
    ReqId: string;
    cropClass:string;
    cropName:string;
    quantity:number;
    buyerId:number;
    mandiPincode:number;
    
    constructor(cropClass,cropName,quantity,buyerId,mandiPincode){
        this.cropClass=cropClass;
        this.cropName=cropName;
        this.quantity=quantity;
        this.buyerId=buyerId;
        this.mandiPincode=mandiPincode;
    }
    
}

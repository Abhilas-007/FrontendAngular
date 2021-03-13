import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ClerkCrop } from "../shared/models/ClerkCrop";

@Injectable({
    providedIn: 'root'
})

export class ClerkBuyCropsService {
    constructor(private http: HttpClient) { }

    getTotalPrice(clerkCrop: ClerkCrop[]): Observable<any> {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/getTotalPrice", clerkCrop);
    }

    buyCrops(clerkCrop: ClerkCrop[]): Observable<any> {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/buyCrops", clerkCrop);
    }

    getStorageByClerkId(clerkId: String): Observable<any> {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/getStorage", clerkId);
    }

    getSingleCropPrice(clerkCrop: ClerkCrop): Observable<any> {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/getSingleCropPrice", clerkCrop);
    }

    validateFarmerId(farmerId: number): Observable<any> {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/validateFarmer", farmerId);
    }
}
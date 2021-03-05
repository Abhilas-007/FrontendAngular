import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CropService{
    constructor(private http: HttpClient) {}

    // getCrops(): Observable<Crop[]>
    // {
    //     const allAdmins: Crop[] = CROPS;
    //     return of(allAdmins);
    // }

    getCrops(): Observable<any> 
    {
        return this.http.get("http://localhost:8080/crop/getAllCrops");
    }
}
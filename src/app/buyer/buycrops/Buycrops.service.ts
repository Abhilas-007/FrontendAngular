import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmerTransaction } from 'src/app/shared/models/FarmerTransaction';

@Injectable({
  providedIn: 'root'
})
export class BuycropsService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmerTransaction/getAllCrops";
  constructor(private httpClient:HttpClient) { }
  getCrop(mandiPincode:number):Observable<FarmerTransaction>{
    return this.httpClient.get<FarmerTransaction>(`${this.baseUrl}/${mandiPincode}`);
     }

}

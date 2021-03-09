import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BuyerSignup } from './models/BuyerSignup';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/add-buyer";
  constructor(private httpClient:HttpClient) { }
  createBuyer(buyer:BuyerSignup):Observable<string>{
    console.log(buyer.securityQuestion);
    return this.httpClient.post<string>(`${this.baseUrl}`,buyer);

  }

}

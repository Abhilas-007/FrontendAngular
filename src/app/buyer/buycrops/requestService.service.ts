import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerRequest } from 'src/app/shared/models/BuyerRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/add-buyerRequest";
  constructor(private httpClient:HttpClient) { }
  saveRequest(buyer:BuyerRequest):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, buyer);
     }

}

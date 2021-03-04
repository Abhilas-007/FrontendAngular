import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Buyer } from 'src/app/shared/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseUrl="http://localhost:8080/buyer/add-buyer";
  constructor(private httpClient:HttpClient) { }
  createEmployee(buyer:Buyer):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,buyer);
  }

}

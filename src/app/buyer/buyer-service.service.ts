import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../shared/models/Buyer';
import { BuyerTransaction } from '../shared/models/BuyerTransaction';

@Injectable({
  providedIn: 'root'
})
export class BuyerServiceService {

  private updateUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/update';
  private getUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/get/'+localStorage.getItem('userId');
  private getTransactionUrl= 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyertransaction/getTransaction/'+localStorage.getItem('userId');

  constructor(private httpClient: HttpClient) { }

  getBuyer(): Observable<Buyer>{
    return this.httpClient.get<Buyer>(`${this.getUrl}`);
  }

  updateBuyer(buyer:Buyer): Observable<Buyer>{
    console.log(buyer);
    return this.httpClient.put<Buyer>(`${this.updateUrl}`,buyer);
  }
  getTransaction() {
    return this.httpClient.get<BuyerTransaction[]>(`${this.getTransactionUrl}`)
  }
}

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
  private getUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/get/';
  private getTransactionUrl= 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyerTransaction/getTransactions/';

  constructor(private httpClient: HttpClient) { }

  getBuyer(userId: any): Observable<Buyer>{
    return this.httpClient.get<Buyer>(`${this.getUrl}`+userId);
  }

  updateBuyer(buyer:Buyer): Observable<Buyer>{
    console.log(buyer);
    return this.httpClient.put<Buyer>(`${this.updateUrl}`,buyer);
  }
  getTransaction(userId:any) {
    return this.httpClient.get<BuyerTransaction[]>(`${this.getTransactionUrl}`+userId)
  }
}

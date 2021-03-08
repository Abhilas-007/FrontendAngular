import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../shared/models/Buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerServiceService {

  private updateUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/updateBuyer';
  private getUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/get/'+localStorage.getItem('userId');

  constructor(private httpClient: HttpClient) { }

  getBuyer(): Observable<Buyer>{
    return this.httpClient.get<Buyer>(`${this.getUrl}`);
  }

  updateBuyer(buyer:Buyer): Observable<Buyer>{
    console.log(buyer);
    return this.httpClient.put<Buyer>(`${this.updateUrl}`,buyer);
  }
}

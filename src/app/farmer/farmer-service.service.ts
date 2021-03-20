import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../shared/models/Farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {
  getUrl='https://alok-emandi-dec-20-dev-api.azurewebsites.net';
  
  constructor(private httpClient: HttpClient) { }
 
    getFarmer(): Observable<Farmer>{
      return this.httpClient.get<Farmer>(`${"https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmer/getfarmer/"}`+`/`+localStorage.getItem('userId'));
    }
    updateFarmer(farmer: Farmer):Observable<Farmer> {
      return this.httpClient.put<Farmer>(`${"https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmer/updateFarmer"}`,farmer);
    }

    getTransactions(): Observable<any>{
     return this.httpClient.get(`${this.getUrl}/farmerTransaction/`+localStorage.getItem('userId'));
    }
 
}


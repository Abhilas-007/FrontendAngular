import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../shared/models/Farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {
  getUrl='https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmer/getfarmer/'+localStorage.getItem('userId');
  constructor(private httpClient: HttpClient) { }
 
    getFarmer(): Observable<Farmer>{
      return this.httpClient.get<Farmer>(`${this.getUrl}`);
    }
    updateFarmer(farmer: Farmer):Observable<Farmer> {
      return this.httpClient.put<Farmer>(`${this.getUrl}`,farmer);
    }
 
}
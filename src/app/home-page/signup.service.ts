import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Farmer } from '../shared/models/Farmer';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseURL ="https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmer/createFarmer";
  constructor(private httpClient: HttpClient) { }

  createFarmer(farmer:Farmer): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, farmer);
  }
  
}

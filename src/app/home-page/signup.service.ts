import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Farmer } from '../shared/models/Farmer';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseURL ="http://localhost:8080/farmer/createFarmer";
  constructor(private httpClient: HttpClient) { }

  createEmployee(farmer:Farmer): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, farmer);
  }
  
}

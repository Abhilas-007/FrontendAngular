import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clerk } from 'src/app/shared/models/Clerk';

@Injectable({
  providedIn: 'root'
})
export class ViewClerkService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getAllClerks";
  constructor(private httpClient:HttpClient ) { }

  getClerks(adminId:string):Observable<Clerk[]>{
 return this.httpClient.get<Clerk[]>(`${this.baseUrl}/${adminId}`);
  }

}

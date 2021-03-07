import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clerk } from 'src/app/shared/models/Clerk';

@Injectable({
  providedIn: 'root'
})
export class ViewClerkService {

  private baseUrl="http://localhost:8080/admin/getAllClerks";
  constructor(private httpClient:HttpClient ) { }

  getClerks(adminId:string):Observable<Clerk[]>{
 return this.httpClient.get<Clerk[]>(`${this.baseUrl}/${adminId}`);
  }

}

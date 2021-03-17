import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clerk } from 'src/app/shared/models/Clerk';

@Injectable({
  providedIn: 'root'
})
export class UpdateclerkService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getClerkById";
  private baseUrl1="https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/updateclerk";
  constructor(private httpClient:HttpClient) { }
  getClerk(clerkid:string):Observable<Clerk>{
    return this.httpClient.get<Clerk>(`${this.baseUrl}/${clerkid}`);
     }
     updateClerk(clerk:Clerk): Observable<Clerk>{
      console.log(clerk);
      return this.httpClient.put<Clerk>(`${this.baseUrl1}`,clerk);
    }
}

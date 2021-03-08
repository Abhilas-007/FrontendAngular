import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/shared/models/Crop';

@Injectable({
  providedIn: 'root'
})
export class ViewcropService {

  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getAllCrops";
  constructor(private httpClient:HttpClient ) { }

  getCrops(adminId:string):Observable<Crop[]>{
 return this.httpClient.get<Crop[]>(`${this.baseUrl}/${adminId}`);
  }

}

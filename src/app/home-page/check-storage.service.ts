import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../shared/models/Admin';

@Injectable({
  providedIn: 'root'
})
export class CheckStorageService {

  
  private findAdmin:String='https://alok-emandi-dec-20-dev-api.azurewebsites.net/getAdminByState';
  private findMandi:String='https://alok-emandi-dec-20-dev-api.azurewebsites.net/mandi/getMandiByAdminId';

  constructor(private http:HttpClient) { }

  getAdmins(map:any): Observable<any>{
    

    const convMap={};
    map.forEach((val: string, key: string) => {
      convMap[key] = val;
    });
    return this.http.post(`${this.findAdmin}`, convMap);
  } 

  getMandis(map:any): Observable<any>{
    console.log(map);
    const convMap={};
    map.forEach((val: string, key: string) => {
      convMap[key] = val;
    });
    return this.http.post(`${this.findMandi}`,convMap);

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../shared/models/Admin';

@Injectable({
  providedIn: 'root'
})
export class CheckStorageService {

  
  private findAdmin:String='http://localhost:8080/admin/getAdminByState';
  private findMandi:String='http://localhost:8080/mandi/getMandiByAdminId';

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

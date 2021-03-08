import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AdminService{
    constructor(private http: HttpClient) {}

    // getAdmins(): Observable<Admin[]>{
    //     const allAdmins: Admin[] = ADMINS;
    //     return of(allAdmins);
    // }

    // public getAdmins()
    // {
    //     return this.http.get("http://localhost:8080/admin/getAllAdmins");
    // }

    getAdmins(): Observable<any> 
    {
        return this.http.get("https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getAllAdmins");
    }
}
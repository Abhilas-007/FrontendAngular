import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExtraCredit } from "../shared/models/ExtraCredit";

@Injectable({
    providedIn: 'root'
})

export class ClerkTransactionService {
    constructor(private http: HttpClient) { }

    checkForTransactionId(id: number): Observable<any>
    {
        return this.http.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmerTransaction/checkForTransactonId", id);
    }

    creditExtraAmount(extraCredit: ExtraCredit): Observable<any>
    {
        return this.http.put("https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmerTransaction/creditExtraAmount", extraCredit);
    }

}
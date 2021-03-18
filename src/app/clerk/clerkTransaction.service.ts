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
        return this.http.post("http://localhost:8080/farmerTransaction/checkForTransactonId", id);
    }

    creditExtraAmount(extraCredit: ExtraCredit): Observable<any>
    {
        return this.http.put("http://localhost:8080/farmerTransaction/creditExtraAmount", extraCredit);
    }

}
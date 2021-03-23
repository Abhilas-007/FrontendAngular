import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../shared/models/Buyer';
import { BuyerTransaction } from '../shared/models/BuyerTransaction';
import { Clerk } from '../shared/models/Clerk';
import { Farmer } from '../shared/models/Farmer';
import { FarmerTransaction } from '../shared/models/FarmerTransaction';

@Injectable({
  providedIn: 'root'
})
export class ClerkService {

  private idUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/farmers';
  private buyerIdUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/buyers';
  private farmerUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmer/details';
  private buyerUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyer/details';
  private transactionurl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/farmerTransaction/byId';
  private transactionurl1 = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/buyerTransaction/byId';
  private baseUrl="https://alok-emandi-dec-20-dev-api.azurewebsites.net";
  constructor(private httpClient: HttpClient) { }

  getFarmerIds(clerkId: string): Observable<Array<number>>{
    let param = new HttpParams();
    param = param.append("clerkId",clerkId);
    return this.httpClient.get<Array<number>>(`${this.idUrl}`,{params:param});
  }

  getFarmerDetails(farmerId: number): Observable<Farmer>{
    let param = new HttpParams();
    param = param.append('farmerId',farmerId.toString());
    return this.httpClient.get<Farmer>(`${this.farmerUrl}`,{params:param});
  }

  getTransactions(clerkId:string,farmerId:number):Observable<FarmerTransaction[]>{
    let param = new HttpParams();
    param = param.append('clerkId',clerkId);
    param = param.append('farmerId',farmerId.toString());
    return this.httpClient.get<FarmerTransaction[]>(`${this.transactionurl}`,{params:param});
  }

  getBuyerIds(clerkId: string): Observable<Array<number>>{
    let param = new HttpParams();
    param = param.append("clerkId",clerkId);
    return this.httpClient.get<Array<number>>(`${this.buyerIdUrl}`,{params:param});
  }

  getBuyerDetails(buyerId: number): Observable<Buyer>{
    let param = new HttpParams();
    param = param.append('buyerId',buyerId.toString());
    return this.httpClient.get<Buyer>(`${this.buyerUrl}`,{params:param});
  }

  getBuyerTransactions(clerkId:string,buyerId:number):Observable<BuyerTransaction[]>{
    let param = new HttpParams();
    param = param.append('clerkId',clerkId);
    param = param.append('buyerId',buyerId.toString());
    return this.httpClient.get<BuyerTransaction[]>(`${this.transactionurl1}`,{params:param});
  }

  getClerk(userId: any): Observable<Clerk>
  {
    return this.httpClient.get<Clerk>("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/getClerk/" + userId);
  }

  updateClerk(clerk: Clerk): Observable<any>
  {
    return this.httpClient.put("https://alok-emandi-dec-20-dev-api.azurewebsites.net/clerk/updateClerk",clerk);
  }

   getRequestList(userId: any): Observable<any>{
     return this.httpClient.get(`${this.baseUrl}/clerk/getRequestList/`+userId);
   }

   acceptRequest(requestId: any): Observable<any>{
     let obj={
       reqId: requestId
     }
     return this.httpClient.post(`${this.baseUrl}/clerk/acceptRequest`, obj, {responseType: 'text'});
   }

   rejectRequest(requestId: any): Observable<any>{
    let obj={
      reqId: requestId
    }
    return this.httpClient.post(`${this.baseUrl}/clerk/rejectRequest`,obj, {responseType: 'text'});
  }
}

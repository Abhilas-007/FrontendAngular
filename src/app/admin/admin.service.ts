import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../shared/models/Crop';
import { Mandi } from '../shared/models/Mandi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private updateMspUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/crop/updateMSP';
  private getMSPUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/crop/getCropMSP';
  private addMandiUrl = 'https://alok-emandi-dec-20-dev-api.azurewebsites.net/mandi/add';

  constructor(private httpClient: HttpClient) { }

  getMSP(adminId: string, cropName: string): Observable<Crop>{
    let param = new HttpParams();
    param = param.append("cropName",cropName);
    param = param.append("adminId",adminId);
    return this.httpClient.get<Crop>(`${this.getMSPUrl}`,{params:param});
  }

  updateMSP(crop: Crop): Observable<Crop>{
    if((crop.cropMSP<=0)||(crop.cropMSP>1500)){
      window.alert("MSP range exceeded");
      return null;
    }
    else{
      crop.adminId=localStorage.getItem('userId');
      return this.httpClient.put<Crop>(`${this.updateMspUrl}`,crop);
    }
  }
  getCropPriceForBuyer(map:any): Observable<any>{
   
    return this.httpClient.get(`${"https://alok-emandi-dec-20-dev-api.azurewebsites.net/crop/getCropPrice"}`+`/`+localStorage.getItem('userId')+
     `/`+ map.get('cropName')+ `/`+ map.get('cropClass'));
  }

  updateCropPrice(map: any): Observable<any> {
    let obj = {
      adminId:localStorage.getItem('userId'),
      cropName: map.get('cropName'),
      cropClass: map.get('cropClass'),
      cropPrice:map.get('price')
    };
    return this.httpClient.put(`${"https://alok-emandi-dec-20-dev-api.azurewebsites.net/cropVariety/updateCropPrice"}`, obj);
  }

  getFarmersByAdminIdAndMandiPincode(adminId: any, mandiPincode: any): Observable<any> {
    const map: Map<string, string> = new Map<string, string>();
    map.set('adminId', adminId);
    map.set('mandiPincode', mandiPincode);
    const convMap = {};
    map.forEach((val: string, key: string) => {
      convMap[key] = val;
    });
    console.log(map);
    console.log(convMap);
    return this.httpClient.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getAllFarmersByAdminIdAndMandiPincode", convMap);
  }

  getBuyersByAdminIdAndMandiPincode(adminId: any, mandiPincode: any): Observable<any> {
    const map: Map<string, string> = new Map<string, string>();
    map.set('adminId', adminId);
    map.set('mandiPincode', mandiPincode);
    const convMap = {};
    map.forEach((val: string, key: string) => {
      convMap[key] = val;
    });
    console.log(map);
    console.log(convMap);
    return this.httpClient.post("https://alok-emandi-dec-20-dev-api.azurewebsites.net/admin/getAllBuyersByAdminIdAndMandiPincode", convMap);
  }

  addMandi(mandi: Mandi): Observable<Mandi>{
    mandi.adminId = localStorage.getItem('userId');
    console.log(mandi);
    return this.httpClient.post<Mandi>(`${this.addMandiUrl}`,mandi);
  }

}

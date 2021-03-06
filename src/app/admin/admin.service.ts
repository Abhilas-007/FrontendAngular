import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from '../shared/models/Crop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private updateMspUrl = 'http://localhost:8080/crop/updateMSP';
  private getMSPUrl = 'http://localhost:8080/crop/getCropMSP';

  constructor(private httpClient: HttpClient) { }

  getMSP(adminId: string, cropName: string): Observable<Crop>{
    let param = new HttpParams();
    param = param.append("cropName",cropName);
    param = param.append("adminId",adminId);
    return this.httpClient.get<Crop>(`${this.getMSPUrl}`,{params:param});
  }

  updateMSP(crop: Crop): Observable<Crop>{
    if(crop.cropMSP <= 0){
      window.alert("Invalid MSP");
      return null;
    }
    else{
      crop.adminId="11";
      return this.httpClient.put<Crop>(`${this.updateMspUrl}`,crop);
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../shared/models/Admin';

@Injectable({
  providedIn: 'root',
})
export class SuperAdminService {
 //private baseUrl: string =
   //'https://alok-emandi-dec-20-dev-api.azurewebsites.net';
  private baseUrl: string = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) {}

  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  charsSpecial = '!@#$%^&*~|}{[]?></';
  randomStringspecial(length, charsSpecial) {
    var result = '';
    for (var i = length; i > 0; --i)
      result += charsSpecial[Math.floor(Math.random() * charsSpecial.length)];
    return result;
  }
  randomString(length, chars) {
    var result = '';
    result += Math.floor(this.getRandomArbitrary(0, 9));
    result += Math.floor(this.getRandomArbitrary(0, 9));
    result += this.randomStringspecial(2, this.charsSpecial);
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  getRandomArbitrary(min, max): any {
    return Math.random() * (max - min) + min;
  }

  addAdmin(map: any): Observable<any> {
    let obj = {
      emailId: map.get('emailId'),
      state: map.get('state'),
      password: this.randomString(this.getRandomArbitrary(6, 10), this.chars),
      sAdminId: localStorage.getItem('userId')
    };
    return this.httpclient.post(`${this.baseUrl}/sAdmin/addAdmin`, obj, {responseType :'text'});
  }

  updateAdmin(admin: Admin): Observable<Admin>{
    admin.password = this.randomString(this.getRandomArbitrary(6,10), this.chars);
    return this.httpclient.put<Admin>(`${this.baseUrl}/admin/updateAdmin`,admin);
  }
}

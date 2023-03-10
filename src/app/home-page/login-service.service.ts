import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
 private baseUrl: string =
   'https://alok-emandi-dec-20-dev-api.azurewebsites.net';
 //private baseUrl: string = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) {}
  loginAdmin(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
      password: map.get('password'),
    };
    return this.httpclient.post(`${this.baseUrl}/admin/login`, obj,{responseType: 'text'});
  }
  loginSAdmin(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
      password: map.get('password'),
    };
    return this.httpclient.post(`${this.baseUrl}/sAdmin/login`, obj,{responseType: 'text'});
  }
  loginBuyer(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
      password: map.get('password'),
    };
    return this.httpclient.post(`${this.baseUrl}/buyer/login`, obj,{responseType: 'text'});
  }
  loginFarmer(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
      password: map.get('password'),
    };
    return this.httpclient.post(`${this.baseUrl}/farmer/login`, obj,{responseType: 'text'});
  }
  loginClerk(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
      password: map.get('password'),
    };
    return this.httpclient.post(`${this.baseUrl}/clerk/login`, obj, {responseType: 'text'});
  }
  resetPass(map: any): Observable<any> {
    let obj = {
      userId: map.get('userId'),
    };
    if (map.get('userType') == 'buyer')
      return this.httpclient.get(
        `${this.baseUrl}/buyer/validate/` + map.get('userId'),{responseType: 'text'}
      );
    else if (map.get('userType') == 'farmer')
      return this.httpclient.get(
        `${this.baseUrl}/farmer/validate/` + map.get('userId'),{responseType: 'text'}
      );
    else if (map.get('userType') == 'clerk')
      return this.httpclient.get(
        `${this.baseUrl}/clerk/validate/` + map.get('userId'),{responseType: 'text'}
      );
    else if (map.get('userType') == 'admin')
      return this.httpclient.get(
        `${this.baseUrl}/admin/validate/` + map.get('userId'),{responseType: 'text'}
      );
    else if (map.get('userType') == 'sAdmin')
      return this.httpclient.get(
        `${this.baseUrl}/sAdmin/validate/` + map.get('userId'),{responseType: 'text'}
      );
  }

  changePassword(password: string): Observable<any> {
    console.log(password);
    let obj = {
      password: password,
      userId: localStorage.getItem('userId'),
    };
    console.log(obj);
    if (localStorage.getItem('userType') == 'buyer')
      return this.httpclient.put(`${this.baseUrl}/buyer/resetPassword`, obj);
    else if (localStorage.getItem('userType') == 'farmer')
      return this.httpclient.put(`${this.baseUrl}/farmer/resetPassword`, obj);
    else if (localStorage.getItem('userType') == 'clerk')
      return this.httpclient.put(`${this.baseUrl}/clerk/resetPassword`, obj);
    else if (localStorage.getItem('userType') == 'admin')
      return this.httpclient.put(`${this.baseUrl}/admin/resetPassword`, obj);
    else if (localStorage.getItem('userType') == 'sAdmin') {
      let a = this.httpclient.put(`${this.baseUrl}/sAdmin/resetPassword`, obj);
      return a;
    }
  }
  checkSecurity(map: any): Observable<any> {
    let obj = {
      userId: localStorage.getItem('userId'),
      sQ: map.get('sQuestion'),
      answer: map.get('answer'),
    };
    let s = localStorage.getItem('userType');
    s += '/sqCheck';
    return this.httpclient.post(`${this.baseUrl}/` + s, obj, {
      responseType: 'text',
    });
  }
  sendPasswordMail(s:any): Observable<any> {
    s+='/passwordMail';
    let obj = {userId:localStorage.getItem('userId')}
    return this.httpclient.post(`${this.baseUrl}/` + s,obj,  {
      responseType: 'text',
    });
  }
}

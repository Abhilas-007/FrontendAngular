import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _router: Router) { }

  logOut(): void {
    localStorage.setItem('loginStatus', 'false');
    localStorage.setItem('userId', null);
    localStorage.setItem("userType", null);
    this._router.navigate(['']);
  }
}

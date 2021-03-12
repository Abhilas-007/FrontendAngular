import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _router: Router) { }

  logOut(): void {
    alert(localStorage.getItem('userType')+" with id:"+localStorage.getItem('userId')+" logged out successfully...");
    localStorage.clear();
    this._router.navigate(['']);
  }
}

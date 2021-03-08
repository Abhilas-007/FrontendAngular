import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _router: Router) { }

  logOut(): void {
    localStorage.clear();
    this._router.navigate(['']);
  }
}

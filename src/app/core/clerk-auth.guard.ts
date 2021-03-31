import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClerkAuthGuard implements CanActivate {
  constructor (private route:Router) {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('userType') == 'clerk') {

      
      return true;
    }else{

      this.route.navigate(['/login-home']);
      return false;
    }
  }
  
}

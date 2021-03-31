import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuard implements CanActivate {

  constructor (private route:Router) {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('userType') == 'buyer') {

      
      return true;
    }else{

      this.route.navigate(['/login-home']);
      return false;
    }
  }
  
}

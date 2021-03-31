import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerAuthGuard implements CanActivate {
  constructor (private route:Router) {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('userType') == 'farmer') {

      
      return true;
    }else{

      this.route.navigate(['/login-home']);
      return false;
    }
  }
  
}

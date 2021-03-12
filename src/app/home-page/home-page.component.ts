import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../core/logout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  val = localStorage.getItem('loginStatus');
  constructor(private _logout: LogoutService,private router:Router) { }

  ngOnInit(): void {
  }

  valid() {
    if (localStorage.getItem('loginStatus') != null) {
      return false;
    }
    else {
      return true;
    }
  }
  logout() {
    this._logout.logOut();
  }


  @ViewChild('burger') burger: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  toggleNavbar() {
    this.burger.nativeElement.classList.toggle('is-active');
    this.menu.nativeElement.classList.toggle('is-active');
  }

  gotoDashboard(){
    if(localStorage.getItem('userType')==='clerk'){
      this.router.navigate(['clerk']);
    }
    if(localStorage.getItem('userType')==='admin'){
      this.router.navigate(['admin']);
    }
    if(localStorage.getItem('userType')==='farmer'){
      this.router.navigate(['farmer']);
    }
    if(localStorage.getItem('userType')==='buyer'){
      this.router.navigate(['buyer']);
    }
    if(localStorage.getItem('userType')==='sAdmin'){
      this.router.navigate(['superAdmin']);
    }
  }

}

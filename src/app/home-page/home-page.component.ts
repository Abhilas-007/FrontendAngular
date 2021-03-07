import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogoutService } from '../core/logout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  val = localStorage.getItem('loginStatus');
  constructor(private _logout: LogoutService) { }

  ngOnInit(): void {
  }

  valid() {
    if (this.val =='true') {

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

}

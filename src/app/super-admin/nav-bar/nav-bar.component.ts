import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogoutService } from 'src/app/core/logout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  val = localStorage.getItem('loginStatus');
  constructor(private _logout: LogoutService) {}

  ngOnInit(): void {}

  valid() {
    if (localStorage.getItem('loginStatus') != null) {
      return false;
    } else {
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

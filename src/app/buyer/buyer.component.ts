import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../core/logout.service';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  val = localStorage.getItem('loginStatus');
  constructor(private router: Router, private log: LogoutService )  { }

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
  
  logout():void{
    this.log.logOut();
  }
}

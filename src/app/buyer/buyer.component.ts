import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../core/logout.service';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
 
  constructor(private router: Router, private log: LogoutService )  { }

  ngOnInit(): void {
  }
 
  
  logout():void{
    this.log.logOut();
  }
}

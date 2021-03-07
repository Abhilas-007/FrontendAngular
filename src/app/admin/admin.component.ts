import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../core/logout.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _router:Router,private _logout:LogoutService) { }

  ngOnInit(): void {
  }

  logout(){
    this._logout.logOut();
  }

}

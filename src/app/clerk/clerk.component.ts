import { Component, OnInit } from '@angular/core';

import { LogoutService } from '../core/logout.service';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.scss']
})
export class ClerkComponent implements OnInit {

  constructor(private _logout:LogoutService) { }

  ngOnInit(): void {
  }

  logout(){

    this._logout.logOut();
  }

}

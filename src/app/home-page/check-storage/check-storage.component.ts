

import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/models/Admin';

import { CheckStorageService } from '../check-storage.service';

@Component({
  selector: 'app-check-storage',
  templateUrl: './check-storage.component.html',
  styleUrls: ['./check-storage.component.scss']
})
export class CheckStorageComponent implements OnInit {

  disable: boolean;
  admins: Array<Admin> = new Array();
  mandies: Array<any> = new Array();
  map: Map<string, string> = new Map<string, string>();
  mandiMap: Map<string, string> = new Map<string, string>();

  temp: Array<any> = new Array();
  constructor(private storage: CheckStorageService) { }

  ngOnInit(): void {
  }
  onClick(state: string) {
    document.getElementById('load')
    .style.display = 'flex',
    state = state.toLowerCase();
    if (state == 'select') {
      alert("Plaease select a state");
      return;
    }
    document.getElementById("table").style.display = "flex";
    this.mandies = [];
    this.map.set('state', state);
    console.log(this.map);
    this.storage.getAdmins(this.map).subscribe(
      data => {
        this.admins = data,

        console.log(this.admins),
        this.admins.forEach(x => {
            this.mandiMap.set('adminId', x.adminId);

            this.storage.getMandis(this.mandiMap).subscribe(
              data => {

               this.hideloader();
                this.temp = data,
                
                
                this.mandies = this.mandies.concat(this.temp),
                console.log(this.mandies)



              },
              error => {console.log(error) }
            );
        })
      },
      error => {console.log(error) , document.getElementById('load').style.display = 'none'}


    );


  }
  hideloader() {
  
    // Setting display of spinner
    // element to none
    document.getElementById('load')
        .style.display = 'none';
}
}

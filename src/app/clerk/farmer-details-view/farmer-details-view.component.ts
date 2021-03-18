import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-details-view',
  templateUrl: './farmer-details-view.component.html',
  styleUrls: ['./farmer-details-view.component.scss']
})
export class FarmerDetailsViewComponent implements OnInit {

  public lists:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  constructor() { }

  ngOnInit(): void {
  }

}

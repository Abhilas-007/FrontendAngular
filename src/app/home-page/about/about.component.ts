import { Component, OnInit } from '@angular/core';
import{ about } from '../../shared/mokes/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about:string=about.abt;
  constructor() { }

  ngOnInit(): void {
  }

}

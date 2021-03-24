import { Component, OnInit } from '@angular/core';
import{ about } from '../../shared/mokes/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // about:string=about.abt;
  // about1:string=about.abt1;

  heading1:string = about.heading1;
  heading2:string = about.heading2;
  content1:string = about.content1;
  content2:string = about.content2;
  para1:string = about.para1;
  para2:string = about.para2;

  constructor() { }

  ngOnInit(): void {
  }

}

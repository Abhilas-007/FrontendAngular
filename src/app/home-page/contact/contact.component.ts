import { Component, OnInit } from '@angular/core';
import { contact } from '../../shared/mokes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact:string=contact.contactUs;
  
  constructor() { }

  ngOnInit(): void {
  }

}

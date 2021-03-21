import { Component, OnInit } from '@angular/core';
import { contact } from '../../shared/mokes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact:string=contact.contactUs;
  mail:string=contact.mail;
  phone1:string=contact.phone1;
  phone2:string=contact.phone2
  constructor() { }

  ngOnInit(): void {
  }

}

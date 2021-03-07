import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../core/logout.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent implements OnInit {

  constructor(private router: Router, private log: LogoutService ) { }

  ngOnInit(): void {
  }

  onCLickMsp()
  {
    // this.router.navigate(['']);
    this.router.navigate(['/msp']);
  }

  onCLickTransaction()
  {
    // this.router.navigate(['']);
    this.router.navigate(['/transaction']);
  }
  logout():void{
    this.log.logOut();
  }

}

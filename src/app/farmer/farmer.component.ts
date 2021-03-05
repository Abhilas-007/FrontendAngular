import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent implements OnInit {

  constructor(private router: Router) { }

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

}

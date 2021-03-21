import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Clerk } from 'src/app/shared/models/Clerk';
import { ClerkService } from '../clerk.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit 
{
  clerk: Clerk = new Clerk();
  @Output() formSubmit: EventEmitter<Clerk> = new EventEmitter<Clerk>();
  hide: boolean = true;

  constructor(private clerkService: ClerkService,private router: Router) {}

  ngOnInit(): void 
  {
    this.getClerk();
  }

  getClerk()
  {
    this.clerkService.getClerk(localStorage.getItem('userId')).subscribe(data => 
      {
        this.clerk = data
      },error => 
      {
        alert("Error getting the clerk details.");
        this.router.navigate(['/clerk']);
      }
    );
  }

  onSubmit(form: NgForm)
  {
    this.clerkService.updateClerk(form.value).subscribe(data => 
      {
        this.clerk=data;
      }, error => 
      {
        alert("Error updating the clerk.");
        this.router.navigate(['/clerk']);
      }
    );
    alert("Details Updated Successfuly");
    this.router.navigate(['/clerk']);
  }
}


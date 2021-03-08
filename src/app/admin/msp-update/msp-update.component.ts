import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Crop } from 'src/app/shared/models/Crop';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-msp-update',
  templateUrl: './msp-update.component.html',
  styleUrls: ['./msp-update.component.scss']
})
export class MspUpdateComponent implements OnInit {

  crop: Crop = new Crop();

  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  getMSP(cname: string){
    console.log(cname);
    this.adminService.getMSP(localStorage.getItem('userId'),cname).subscribe(data => {
      this.crop = data;
    }, error => window.alert("Invalid Crop Name")
    );

  }

  onSubmit(form: NgForm){
    this.adminService.updateMSP(form.value).subscribe(data => {
      this.crop = data;
    });

    window.alert("MSP Updated Successfuly");
    window.location.reload();
  }

  onCancel(){
    this.router.navigate(['/admin']);
  }

}

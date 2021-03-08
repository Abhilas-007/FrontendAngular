import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/app/shared/models/Crop';
import { ViewcropService } from './viewcrop.service';

@Component({
  selector: 'app-view-crop',
  templateUrl: './view-crop.component.html',
  styleUrls: ['./view-crop.component.scss']
})
export class ViewCropComponent implements OnInit {
crop:Crop[]=[];
  constructor(private cropService:ViewcropService) { }
  adminId=localStorage.getItem('userId');
  ngOnInit(): void {
    this.getCrops();
  }
  private getCrops(){
    this.cropService.getCrops(this.adminId).subscribe(data=>{
      this.crop=data;
    });
  }
}

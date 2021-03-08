import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { SharedModule } from '../shared/shared.module';
import { MspUpdateComponent } from './msp-update/msp-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MandiComponent } from './mandi/mandi.component';
import { ViewCropComponent } from './view-crop/view-crop.component';
import { ViewClerkComponent } from './view-clerk/view-clerk.component';
import { UpdateCropPriceComponent } from './update-crop-price/update-crop-price.component';

@NgModule({

  declarations: [AdminComponent, MspUpdateComponent, MandiComponent,ViewCropComponent, ViewClerkComponent, UpdateCropPriceComponent,],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

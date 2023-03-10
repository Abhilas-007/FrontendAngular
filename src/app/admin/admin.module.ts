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
import { ViewFarmerComponent } from './view-farmer/view-farmer.component';
import { ViewBuyerComponent } from './view-buyer/view-buyer.component';
import { HomePageModule } from '../home-page/home-page.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { UpdateClerkComponent } from './update-clerk/update-clerk.component';
import { UpdateCropQualityPriceComponent } from './update-crop-quality-price/update-crop-quality-price.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({

  declarations: [AdminComponent, MspUpdateComponent, MandiComponent,ViewCropComponent, ViewClerkComponent, UpdateCropPriceComponent, ViewFarmerComponent, ViewBuyerComponent, UpdateClerkComponent, UpdateCropQualityPriceComponent, ViewProfileComponent],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomePageModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    })
  ]
})
export class AdminModule { }

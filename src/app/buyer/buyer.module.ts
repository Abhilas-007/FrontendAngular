import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { BuycropsComponent } from './buycrops/buycrops.component';


@NgModule({
  declarations: [BuyerComponent,ViewProfileComponent, BuycropsComponent],
  imports: [
    CommonModule,
    FormsModule,
    BuyerRoutingModule,
    SharedModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    })
  ]
})
export class BuyerModule { }

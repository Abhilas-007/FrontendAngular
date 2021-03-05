import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BuyerComponent,ViewProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    BuyerRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class BuyerModule { }

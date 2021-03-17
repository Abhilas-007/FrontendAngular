import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClerkRoutingModule } from './clerk-routing.module';
import { ClerkComponent } from './clerk.component';

import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { BuyCropsTabComponent } from './buy-crops-tab/buy-crops-tab.component';
import { ConfirmCreditComponent } from './confirm-credit/confirm-credit.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerDetailsViewComponent } from './farmer-details-view/farmer-details-view.component';
@NgModule({
  declarations: [ClerkComponent, BuyCropsTabComponent, ConfirmCreditComponent, FarmerDetailsViewComponent],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    SharedModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService]
})
export class ClerkModule { }
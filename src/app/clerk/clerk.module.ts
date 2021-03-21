import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ClerkRoutingModule } from './clerk-routing.module';
import { ClerkComponent } from './clerk.component';

import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { BuyCropsTabComponent } from './buy-crops-tab/buy-crops-tab.component';
import { ConfirmCreditComponent } from './confirm-credit/confirm-credit.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerDetailsViewComponent } from './farmer-details-view/farmer-details-view.component';
import { CreditConfirmDialogComponent } from './credit-confirm-dialog/credit-confirm-dialog.component';
import { CreditTabComponent } from './credit-tab/credit-tab.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BuyerDetailsViewComponent } from './buyer-details-view/buyer-details-view.component'

@NgModule({
  declarations: [ClerkComponent, BuyCropsTabComponent, ConfirmCreditComponent, FarmerDetailsViewComponent, CreditConfirmDialogComponent, CreditTabComponent, BuyerDetailsViewComponent],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    SharedModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [DataService],
  entryComponents: [CreditConfirmDialogComponent]
})
export class ClerkModule { }
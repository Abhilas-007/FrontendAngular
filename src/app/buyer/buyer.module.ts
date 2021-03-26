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
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule,MatDialogRef,MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from './dialog.service';
@NgModule({
  declarations: [BuyerComponent,ViewProfileComponent, BuycropsComponent,ViewTransactionComponent, NavBarComponent, ConfirmDialogComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    BuyerRoutingModule,
    SharedModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MatDialog,
      useValue: {}
    },
    DialogService
 ]
})
export class BuyerModule { }

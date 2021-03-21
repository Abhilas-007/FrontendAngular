import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { MspTabComponent } from './msp-tab/msp-tab.component';
import { TransactionTabComponent } from './transaction-tab/transaction-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ViewAndUpdateProfileComponent } from './view-and-update-profile/view-and-update-profile.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [FarmerComponent, MspTabComponent, TransactionTabComponent, LogoutComponent, ViewAndUpdateProfileComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    FarmerRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class FarmerModule { }

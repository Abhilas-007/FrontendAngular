import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { MspTabComponent } from './msp-tab/msp-tab.component';
import { TransactionTabComponent } from './transaction-tab/transaction-tab.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FarmerComponent, MspTabComponent, TransactionTabComponent],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class FarmerModule { }

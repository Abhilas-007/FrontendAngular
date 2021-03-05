import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { MspTabComponent } from './msp-tab/msp-tab.component';
import { TransactionTabComponent } from './transaction-tab/transaction-tab.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FarmerComponent, MspTabComponent, TransactionTabComponent],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FarmerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { SharedModule } from '../shared/shared.module';
import { MspUpdateComponent } from './msp-update/msp-update.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminComponent, MspUpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }

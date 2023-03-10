import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ViewAllAdminDetailsComponent } from './view-all-admin-details/view-all-admin-details.component';



@NgModule({
  declarations: [SuperAdminComponent, NavBarComponent, AddAdminComponent, UpdateAdminComponent,ViewAllAdminDetailsComponent],

  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


@NgModule({
  declarations: [SuperAdminComponent, NavBarComponent, AddAdminComponent, UpdateAdminComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    FormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }

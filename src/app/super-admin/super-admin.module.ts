import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SuperAdminComponent, NavBarComponent, AddAdminComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    }),
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';


@NgModule({
  declarations: [SuperAdminComponent, NavBarComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    })
  ]
})
export class SuperAdminModule { }

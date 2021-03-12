import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClerkRoutingModule } from './clerk-routing.module';
import { ClerkComponent } from './clerk.component';

import { SharedModule } from '../shared/shared.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
@NgModule({
  declarations: [ClerkComponent],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    SharedModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition:true
    })
  ]
})
export class ClerkModule { }

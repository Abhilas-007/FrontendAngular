import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClerkRoutingModule } from './clerk-routing.module';
import { ClerkComponent } from './clerk.component';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ClerkComponent],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    SharedModule
  ]
})
export class ClerkModule { }

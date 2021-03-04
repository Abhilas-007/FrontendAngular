import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login-home/login.component';
import { SignUpComponent } from './sign-up-home/sign-up.component';
import {BuyerSignupComponent} from './buyer-signup/buyer-signup.component'
import {FormsModule} from '@angular/forms';

//import { information } from '../shared/about';
@NgModule({
  declarations: [HomePageComponent, AboutComponent, ContactComponent, LoginComponent, SignUpComponent,BuyerSignupComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,FormsModule
    
    
  ]
})
export class HomePageModule { }

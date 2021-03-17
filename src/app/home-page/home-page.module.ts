import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login-home/login.component';
import { SignUpComponent } from './sign-up-home/sign-up.component';
import { BuyerSignupComponent } from './buyer-signup/buyer-signup.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordChangeSuccessComponent } from './password-change-success/password-change-success.component';
import { PasswordChangefailureComponent } from './password-changefailure/password-changefailure.component';
//import { information } from '../shared/about';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { SecurityQuestionCHeckComponent } from './security-question-check/security-question-check.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    BuyerSignupComponent,
    SignupComponent,
    ForgetPasswordFormComponent,
    ResetPasswordComponent,
    PasswordChangeSuccessComponent,
    PasswordChangefailureComponent,
    SecurityQuestionCHeckComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
})
export class HomePageModule {}

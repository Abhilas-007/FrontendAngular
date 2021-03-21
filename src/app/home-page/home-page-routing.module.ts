import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCropComponent } from '../admin/view-crop/view-crop.component';
import { AboutComponent } from './about/about.component';
import { BuyerSignupComponent } from './buyer-signup/buyer-signup.component';
import { CheckStorageComponent } from './check-storage/check-storage.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login-home/login.component';
import { PasswordChangeSuccessComponent } from './password-change-success/password-change-success.component';
import { PasswordChangefailureComponent } from './password-changefailure/password-changefailure.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SecurityQuestionCHeckComponent } from './security-question-check/security-question-check.component';
import { SignUpComponent } from './sign-up-home/sign-up.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'login-home',component:LoginComponent},
  {path:'sign-up-home',component:SignUpComponent},
  {path:'buyer-signup',component:BuyerSignupComponent},
  {path:'signup',component:SignupComponent},
  { path: 'buyer-signup', redirectTo: ' ', pathMatch: 'full' },
  {path:'viewcrop',component:ViewCropComponent},
  {path:'forget',component:ForgetPasswordFormComponent},
  {path:'resetPass',component:ResetPasswordComponent},
  {path:'passwordChangeSuccess', component:PasswordChangeSuccessComponent},
  {path:'passwordChangeFailure', component:PasswordChangefailureComponent},
  {path:'sqcheck', component:SecurityQuestionCHeckComponent},
  {path:'check-storage',component:CheckStorageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

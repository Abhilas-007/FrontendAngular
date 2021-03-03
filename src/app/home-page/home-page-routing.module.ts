import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './login-home/login.component';
import { SignUpComponent } from './sign-up-home/sign-up.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'login-home',component:LoginComponent},
  {path:'sign-up-home',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

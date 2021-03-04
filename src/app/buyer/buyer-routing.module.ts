import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [{ path: '', component: BuyerComponent },
{path: 'viewProfile', component: ViewProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }

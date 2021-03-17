import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuycropsComponent } from './buycrops/buycrops.component';
import { BuyerComponent } from './buyer.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [{ path: '', component: BuyerComponent },
{path: 'viewProfile', component: ViewProfileComponent},
{path: 'buycrops', component: BuycropsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }

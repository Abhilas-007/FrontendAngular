import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClerkComponent } from './clerk.component';
import { SharedModule } from '../shared/shared.module';
import { BuyCropsTabComponent } from './buy-crops-tab/buy-crops-tab.component';
import { ConfirmCreditComponent } from './confirm-credit/confirm-credit.component';
import { FarmerDetailsViewComponent } from './farmer-details-view/farmer-details-view.component';
import { CreditTabComponent } from './credit-tab/credit-tab.component';
import { BuyerDetailsViewComponent } from './buyer-details-view/buyer-details-view.component';

const routes: Routes = [
  {
    path: 'buyCropsTab',
    component: BuyCropsTabComponent
  },
  {
    path: 'confirmCredit',
    component: ConfirmCreditComponent
  },
  {
    path: 'farmerView',
    component: FarmerDetailsViewComponent
  },
  {
    path: 'buyerView',
    component: BuyerDetailsViewComponent
  },
  {
    path: 'creditTab',
    component: CreditTabComponent
  },
  { 
    path: '', 
    component: ClerkComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClerkRoutingModule { }

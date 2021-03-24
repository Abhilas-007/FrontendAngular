import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerComponent } from './farmer.component';
import { MspTabComponent } from './msp-tab/msp-tab.component';
import { TransactionTabComponent } from './transaction-tab/transaction-tab.component';
import { ViewAndUpdateProfileComponent } from './view-and-update-profile/view-and-update-profile.component';

const routes: Routes = [
  {
    path: "msp",
    component: MspTabComponent
  },
  {
    path: "transaction",
    component: TransactionTabComponent
  },
  { 
    path: '', 
    component: FarmerDashboardComponent 
  },
  {
    path: "viewProfile",
    component: ViewAndUpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }

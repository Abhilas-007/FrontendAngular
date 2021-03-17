import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MandiComponent } from './mandi/mandi.component';
import { MspUpdateComponent } from './msp-update/msp-update.component';
import { ViewClerkComponent } from './view-clerk/view-clerk.component';
import { ViewCropComponent } from './view-crop/view-crop.component';
import { CoreModule } from '../core/core.module';
import { UpdateCropPriceComponent } from './update-crop-price/update-crop-price.component';
import { ViewFarmerComponent } from './view-farmer/view-farmer.component';
import { ViewBuyerComponent } from './view-buyer/view-buyer.component';
import { HomePageModule } from '../home-page/home-page.module'
import { HomePageComponent } from '../home-page/home-page.component';
import { UpdateClerkComponent } from './update-clerk/update-clerk.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'view-crop',component:ViewCropComponent},
{path:'addMandi', component: MandiComponent},
{path:'updateMSP', component: MspUpdateComponent},
{path:'view-clerk',component:ViewClerkComponent},
{path:'userId/cropName/cropClass', component: UpdateCropPriceComponent},
{path:'view-farmer',component:ViewFarmerComponent},
{path:'view-buyer',component:ViewBuyerComponent},
{path:'update-clerk',component:UpdateClerkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

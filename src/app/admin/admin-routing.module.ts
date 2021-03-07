import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MandiComponent } from './mandi/mandi.component';
import { MspUpdateComponent } from './msp-update/msp-update.component';
import { ViewCropComponent } from './view-crop/view-crop.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'admin',component:AdminComponent},
{path:'view-crop',component:ViewCropComponent},
{path:'updateMSP', component: MspUpdateComponent},
{path:'addMandi', component: MandiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

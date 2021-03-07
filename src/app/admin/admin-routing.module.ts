import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MandiComponent } from './mandi/mandi.component';
import { MspUpdateComponent } from './msp-update/msp-update.component';
import { ViewClerkComponent } from './view-clerk/view-clerk.component';
import { ViewCropComponent } from './view-crop/view-crop.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'admin',component:AdminComponent},
{path:'view-crop',component:ViewCropComponent},
{path:'addMandi', component: MandiComponent},
{path:'updateMSP', component: MspUpdateComponent},{path:'view-clerk',component:ViewClerkComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

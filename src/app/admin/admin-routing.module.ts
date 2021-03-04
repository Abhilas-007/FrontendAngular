import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewCropComponent } from './view-crop/view-crop.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'view-crop',component:ViewCropComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

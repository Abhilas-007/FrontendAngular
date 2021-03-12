import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [{ path: '', component: SuperAdminComponent },
{ path: 'addAdmin', component: AddAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }

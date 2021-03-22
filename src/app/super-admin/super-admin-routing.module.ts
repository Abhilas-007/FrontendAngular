import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { SuperAdminComponent } from './super-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ViewAllAdminDetailsComponent } from './view-all-admin-details/view-all-admin-details.component';

const routes: Routes = [{ path: '', component: SuperAdminComponent },
{ path: 'addAdmin', component: AddAdminComponent },
{path: 'updateAdmin', component: UpdateAdminComponent},
{path:'viewAdmins',component:ViewAllAdminDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }

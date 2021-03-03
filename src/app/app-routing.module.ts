import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'clerk',
    loadChildren: () =>
      import('./clerk/clerk.module').then((m) => m.ClerkModule),
  },
  {
    path: 'buyer',
    loadChildren: () =>
      import('./buyer/buyer.module').then((m) => m.BuyerModule),
  },
  {
    path: 'superAdmin',
    loadChildren: () =>
      import('./super-admin/super-admin.module').then(
        (m) => m.SuperAdminModule
      ),
  },
  {
    path: 'farmer',
    loadChildren: () =>
      import('./farmer/farmer.module').then((m) => m.FarmerModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

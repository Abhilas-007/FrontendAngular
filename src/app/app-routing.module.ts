import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/admin-auth.guard';
import { BuyerAuthGuard } from './core/buyer-auth.guard';
import { ClerkAuthGuard } from './core/clerk-auth.guard';
import { FarmerAuthGuard } from './core/farmer-auth.guard';
import { SuperAdminAuthGuard } from './core/super-admin-auth.guard';

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),canActivate:[AdminAuthGuard],
  },
  {
    path: 'clerk',
    loadChildren: () =>
      import('./clerk/clerk.module').then((m) => m.ClerkModule),canActivate:[ClerkAuthGuard],
  },
  {
    path: 'buyer',
    loadChildren: () =>
      import('./buyer/buyer.module').then((m) => m.BuyerModule),canActivate:[BuyerAuthGuard],
  },
  {
    path: 'superAdmin',
    loadChildren: () =>
      import('./super-admin/super-admin.module').then(
        (m) => m.SuperAdminModule
      ),canActivate:[SuperAdminAuthGuard],
  },
  {
    path: 'farmer',
    loadChildren: () =>
      import('./farmer/farmer.module').then((m) => m.FarmerModule),canActivate:[FarmerAuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

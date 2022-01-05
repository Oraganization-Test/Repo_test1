import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./auth-screens/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'auth-screen',
    loadChildren: () => import('./auth-screens/auth-screen/auth-screen.module').then( m => m.AuthScreenPageModule),
    canLoad: [IntroGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'send-letter',
    loadChildren: () => import('./pages/send-letter/send-letter.module').then( m => m.SendLetterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

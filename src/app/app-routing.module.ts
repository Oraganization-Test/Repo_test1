import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-screen',
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
  {
    path: 'record-message',
    loadChildren: () => import('./pages/record-message/record-message.module').then( m => m.RecordMessagePageModule)
  },
  {
    path: 'audio-list',
    loadChildren: () => import('./pages/audio-list/audio-list.module').then( m => m.AudioListPageModule)
  },
  {
    path: 'add-photo',
    loadChildren: () => import('./pages/add-photo/add-photo.module').then( m => m.AddPhotoPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

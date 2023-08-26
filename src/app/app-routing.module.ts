import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/theme-park/home/home.component';
import { authGuard } from './auth/auth.guard';
import { VerificationComponent } from './verification/verification.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SetProfileImageComponent } from './pages/theme-park/account/set-profile-image/set-profile-image.component';
import { GetProfileComponent } from './pages/theme-park/account/get-profile/get-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component : LandingPageComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'verification',
    component : VerificationComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  // {
  //   path : 'set-profile-image',
  //   component : SetProfileImageComponent,
  //   canActivate : [authGuard],
  // },
  // {
  //   path : 'my-profile',
  //   component : GetProfileComponent,
  //   canActivate : [authGuard],
  // },
  {
    path : 'superland',
    loadChildren : () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate : [authGuard],
    canActivateChild : [authGuard]
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

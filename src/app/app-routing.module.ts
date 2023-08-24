import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/theme-park/home/home.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },{
    path : 'superland',
    loadChildren : () => import('./pages/pages.module').then(m => m.PagesModule),
    // canActivate : [authGuard],
    // canActivateChild : [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

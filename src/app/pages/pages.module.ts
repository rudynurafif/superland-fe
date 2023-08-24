import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './theme-park/home/home.component';
import { RidesComponent } from './theme-park/rides/rides.component';
import { TenantsComponent } from './theme-park/tenants/tenants.component';
import { MerchandiseComponent } from './theme-park/merchandise/merchandise.component';
import { Footer2Component } from './theme-park/footer2/footer2.component';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    RidesComponent,
    TenantsComponent,
    MerchandiseComponent,
    Footer2Component,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
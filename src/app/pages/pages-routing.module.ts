import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './theme-park/home/home.component';
import { EventsComponent } from './theme-park/events/events.component';
import { RidesComponent } from './theme-park/rides/rides.component';
import { TenantsComponent } from './theme-park/tenants/tenants.component';
import { MerchandiseComponent } from './theme-park/merchandise/merchandise.component';
import { MapsComponent } from './theme-park/maps/maps.component';
import { ProfileComponent } from './theme-park/profile/profile.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'rides',
    component : RidesComponent
  },
  {
    path : 'events',
    component : EventsComponent
  },
  {
    path : 'tenants',
    component : TenantsComponent
  },
  {
    path : 'merchandise',
    component : MerchandiseComponent
  },
  {
    path : 'maps',
    component : MapsComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

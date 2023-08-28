import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './theme-park/home/home.component';
import { EventsComponent } from './theme-park/events/events.component';
import { RidesComponent } from './theme-park/rides/rides.component';
import { TenantsComponent } from './theme-park/tenants/tenants.component';
import { MerchandiseComponent } from './theme-park/merchandise/merchandise.component';
import { MapsComponent } from './theme-park/maps/maps.component';
import { SetProfileImageComponent } from './theme-park/account/set-profile-image/set-profile-image.component';
import { GetProfileComponent } from './theme-park/account/get-profile/get-profile.component';
import { TopupComponent } from './theme-park/topup/topup.component';
import { HomeAdminComponent } from './administrator/home-admin/home-admin.component';
import { ManageMerchandiseComponent } from './administrator/manage-merchandise/manage-merchandise.component';
import { ManageRidesComponent } from './administrator/manage-rides/manage-rides.component';
import { ManageTenantsComponent } from './administrator/manage-tenants/manage-tenants.component';
import { ManageEventsComponent } from './administrator/manage-events/manage-events.component';
import {ScannerComponent} from "./theme-park/scanner/scanner.component";
import {OurTeamComponent} from "./theme-park/our-team/our-team.component";

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
    component : GetProfileComponent
  },
  {
    path : 'set-profile-image',
    component : SetProfileImageComponent,
  },
  {
    path : 'topup',
    component : TopupComponent
  },

  // Admin Pages
  {
    path : 'home-admin',
    component : HomeAdminComponent
  },
  {
    path : 'manage-rides',
    component : ManageRidesComponent
  },
  {
    path : 'manage-events',
    component : ManageEventsComponent
  },
  {
    path : 'manage-tenants',
    component : ManageTenantsComponent
  },
  {
    path : 'manage-merchandise',
    component : ManageMerchandiseComponent
  },
  {
    path : 'scanner',
    component : ScannerComponent
  },
  {
    path : 'team',
    component : OurTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

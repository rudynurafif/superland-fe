import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './theme-park/home/home.component';
import { RidesComponent } from './theme-park/rides/rides.component';
import { TenantsComponent } from './theme-park/tenants/tenants.component';
import { MerchandiseComponent } from './theme-park/merchandise/merchandise.component';
import { Footer2Component } from './theme-park/footer2/footer2.component';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';
import { EventsComponent } from './theme-park/events/events.component';
import { MapsComponent } from './theme-park/maps/maps.component';
import { SetProfileImageComponent } from './theme-park/account/set-profile-image/set-profile-image.component';
import { GetProfileComponent } from './theme-park/account/get-profile/get-profile.component';
import { FormsModule } from '@angular/forms';
import { TopupComponent } from './theme-park/topup/topup.component';
import { NumberFormatPipe } from '../shared/pipe/number-format.pipe';
import { ManageRidesComponent } from './administrator/manage-rides/manage-rides.component';
import { ManageTenantsComponent } from './administrator/manage-tenants/manage-tenants.component';
import { ManageMerchandiseComponent } from './administrator/manage-merchandise/manage-merchandise.component';
import { HomeAdminComponent } from './administrator/home-admin/home-admin.component';
import { AdminNavbarComponent } from './administrator/admin-navbar/admin-navbar.component';
import { ManageEventsComponent } from './administrator/manage-events/manage-events.component';
import { LoaderComponent } from '../shared/component/loader/loader.component';


@NgModule({
  declarations: [
    HomeComponent,
    RidesComponent,
    TenantsComponent,
    MerchandiseComponent,
    Footer2Component,
    NavbarComponent,
    EventsComponent,
    MapsComponent,
    SetProfileImageComponent,
    GetProfileComponent,
    TopupComponent,
    NumberFormatPipe,
    ManageRidesComponent,
    ManageTenantsComponent,
    ManageMerchandiseComponent,
    HomeAdminComponent,
    AdminNavbarComponent,
    ManageEventsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }

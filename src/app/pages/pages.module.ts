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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopupComponent } from './theme-park/topup/topup.component';
import { NumberFormatPipe } from '../shared/pipe/number-format.pipe';
import { ManageRidesComponent } from './administrator/manage-rides/manage-rides.component';
import { ManageTenantsComponent } from './administrator/manage-tenants/manage-tenants.component';
import { ManageMerchandiseComponent } from './administrator/manage-merchandise/manage-merchandise.component';
import { HomeAdminComponent } from './administrator/home-admin/home-admin.component';
import { AdminNavbarComponent } from './administrator/admin-navbar/admin-navbar.component';
import { ManageEventsComponent } from './administrator/manage-events/manage-events.component';
import { LoaderComponent } from '../shared/component/loader/loader.component';
import {ScanButtonComponent} from "../shared/component/scan-button/scan-button.component";
import { ScannerComponent } from './theme-park/scanner/scanner.component';
import { OurTeamComponent } from './theme-park/our-team/our-team.component';
import { ScanComponent } from './theme-park/scan/scan.component';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { ManageTransactionComponent } from './administrator/manage-transaction/manage-transaction.component';
import { RidesAddEditComponent } from './administrator/manage-rides/rides-add-edit/rides-add-edit.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';


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
    ScanButtonComponent,
    ScannerComponent,
    OurTeamComponent,
    ScanComponent,
    ManageTransactionComponent,
    RidesAddEditComponent,
    // ZXingScannerComponent
    // LoaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ZXingScannerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class PagesModule { }

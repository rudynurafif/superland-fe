import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RidesAddEditComponent } from './rides-add-edit/rides-add-edit.component';
import { ManageRidesService } from './manage-rides.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-rides',
  templateUrl: './manage-rides.component.html',
  styleUrls: ['./manage-rides.component.scss']
})
export class ManageRidesComponent implements OnInit {

  currentRole : string = ''
  displayedColumns: string[] = [
    'id', 
    'name', 
    'description', 
    'location', 
    'price', 
    'barcode',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private readonly authService : AuthService,
    private readonly router : Router,
    private readonly dialog : MatDialog,
    private readonly ridesService : ManageRidesService,
  ) {}

  ngOnInit() {
    this.authService.getRole().subscribe(role => {
      this.currentRole = role

      if (this.currentRole !== "ADMIN") {
        // this.router.navigateByUrl('/superland')
      }
    })
    this.getRidesList()
  }

  openAddEditForm() {
    const dialogRef = this.dialog.open(RidesAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getRidesList()
        }
      }
    })
  }

  getRidesList() {
    this.ridesService.getRidesList().subscribe({
      next : (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error : console.log
    })
  }

  openEditForm(data : any) {
    const dialogRef = this.dialog.open(RidesAddEditComponent, {
      data
    })
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getRidesList()
        }
      }
    })
  }

  deleteRides(id : number) {
    this.ridesService.deleteRides(id).subscribe({
      next : (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully remove rides data',
          showConfirmButton: false,
          timer: 1500
        })
        this.getRidesList()
      },
      error : console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ManageTenantsService } from './manage-tenants.service';
import { TenantsAddEditComponent } from './tenants-add-edit/tenants-add-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.scss']
})
export class ManageTenantsComponent {

  currentRole : string = ''
  displayedColumns: string[] = [
    'id', 
    'name', 
    'description', 
    'location', 
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private readonly authService : AuthService,
    private readonly router : Router,
    private readonly dialog : MatDialog,
    private readonly tenantService : ManageTenantsService,
  ) {}

  isAdmin : boolean = false

  ngOnInit() {
    // this.authService.getRole().subscribe(role => {
    //   this.currentRole = role

    //   if (this.currentRole !== "ADMIN") {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'You are not authorized!'
    //     });
    //     this.router.navigateByUrl('/superland')
    //   }
    // })
    // this.getTenantsList()

    const role = this.authService.getRole();
    this.isAdmin = role === 'ADMIN';
    if (this.isAdmin) {
      this.getTenantsList()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not authorized!'
      });
      this.router.navigateByUrl('/superland')
    }
  }

  openAddEditForm() {
    const dialogRef = this.dialog.open(TenantsAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getTenantsList()
        }
      }
    })
  }

  getTenantsList() {
    this.tenantService.getTenantList().subscribe({
      next : (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error : console.log
    })
  }

  openEditForm(data : any) {
    const dialogRef = this.dialog.open(TenantsAddEditComponent, {
      data
    })
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getTenantsList()
        }
      }
    })
  }

  deleteTenants(id : number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger me-3'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.tenantService.deleteTenant(id).subscribe(() => {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        this.getTenantsList()
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your data is safe :)',
            'error'
            )
            this.getTenantsList()
        }
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

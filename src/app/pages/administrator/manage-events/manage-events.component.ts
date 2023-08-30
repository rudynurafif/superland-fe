import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ManageEventsService } from './manage-events.service';
import { EventsAddEditComponent } from './events-add-edit/events-add-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

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
    private readonly eventService : ManageEventsService,
  ) {}

  ngOnInit() {
    this.authService.getRole().subscribe(role => {
      this.currentRole = role

      if (this.currentRole !== "ADMIN") {
        // this.router.navigateByUrl('/superland')
      }
    })
    this.getEventList()
  }

  openAddEditForm() {
    const dialogRef = this.dialog.open(EventsAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getEventList()
        }
      }
    })
  }

  getEventList() {
    this.eventService.getEventsList().subscribe({
      next : (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error : console.log
    })
  }

  openEditForm(data : any) {
    const dialogRef = this.dialog.open(EventsAddEditComponent, {
      data
    })
    dialogRef.afterClosed().subscribe({
      next : res => {
        if (res) {
          this.getEventList()
        }
      }
    })
  }

  deleteEvent(id : number) {
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
        this.eventService.deleteEvents(id).subscribe(() => {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        this.getEventList()
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your data is safe :)',
            'error'
            )
            this.getEventList()
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

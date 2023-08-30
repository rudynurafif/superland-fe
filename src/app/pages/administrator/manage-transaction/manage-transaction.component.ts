import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ManageRidesService } from '../manage-rides/manage-rides.service';
import { ManageTransactionService } from './manage-transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-transaction',
  templateUrl: './manage-transaction.component.html',
  styleUrls: ['./manage-transaction.component.scss']
})
export class ManageTransactionComponent {

  currentRole : string = ''
  displayedColumns: string[] = [
    'id', 
    'account', 
    'status', 
    'gross_amount', 
    'points', 
    'created_at',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private readonly authService : AuthService,
    private readonly router : Router,
    private readonly dialog : MatDialog,
    private readonly transactionService : ManageTransactionService,
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
    // this.getTransactionList()

    const role = this.authService.getRole();
    this.isAdmin = role === 'ADMIN';
    if (this.isAdmin) {
      this.getTransactionList()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not authorized!'
      });
      this.router.navigateByUrl('/superland')
    }
  }

  getTransactionList() {
    this.transactionService.getTransactionList().subscribe({
      next : (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
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

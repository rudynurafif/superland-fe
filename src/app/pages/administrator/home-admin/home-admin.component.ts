import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {

  currentRole : string = ''

  constructor (
    private readonly authService : AuthService,
    private readonly router : Router,
  ) {}

  isAdmin : boolean = false

  ngOnInit() {
    // this.authService.getRole().subscribe(role => {
    //   this.currentRole = role
    //   if (this.currentRole !== "ADMIN") {
    //     this.router.navigateByUrl('/superland')
    //   }
    // })

    const role = this.authService.getRole();
    this.isAdmin = role === 'ADMIN';
    if (!this.isAdmin) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not authorized!'
      });
      this.router.navigateByUrl('/superland')
    }
  }

}

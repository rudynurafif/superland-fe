import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { AccountService } from 'src/app/pages/theme-park/account/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private readonly router : Router,
    private readonly accountService : AccountService,
    private readonly authService : AuthService
  ) {}

  profileData : any = {}
  isAdmin : boolean = false

  ngOnInit() {
    this.accountService.getAccInfo().subscribe(data => {
      this.profileData = data
    })

    const role = this.authService.getRole();
    this.isAdmin = role === 'ADMIN';
    if (!this.isAdmin) {
      this.router.navigateByUrl('/superland')
    }
  }

  logout() {
    sessionStorage.removeItem('token')
    localStorage.removeItem('userRole')
  }

  topUp() {
    this.router.navigateByUrl('/superland/topup')
  }



}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent {

  constructor(
    private readonly http : HttpClient,
    private readonly router : Router
  ) {}

  profileData : any = {}


  ngOnInit() {
    this.http.get<any>('/api/account/about-me').subscribe(data => {
      this.profileData = data
    })
  }

  logout() {
    sessionStorage.removeItem('token')
  }

  topUp() {
    this.router.navigateByUrl('/superland/topup')
  }

}

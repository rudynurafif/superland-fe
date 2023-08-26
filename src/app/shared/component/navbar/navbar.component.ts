import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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

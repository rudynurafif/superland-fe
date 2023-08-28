import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { AccountService } from 'src/app/pages/theme-park/account/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private readonly router : Router,
    private readonly accountService : AccountService
  ) {}

  profileData : any = {}

  ngOnInit() {
    this.accountService.getAccInfo().subscribe(data => {
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

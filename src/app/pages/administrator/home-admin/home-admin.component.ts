import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';

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

  ngOnInit() {
    this.authService.getRole().subscribe(role => {
      this.currentRole = role
      if (this.currentRole !== "ADMIN") {
        this.router.navigateByUrl('/superland')
      }
    })
  }

}

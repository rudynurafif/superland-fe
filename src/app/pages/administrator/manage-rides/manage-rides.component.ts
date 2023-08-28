import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-manage-rides',
  templateUrl: './manage-rides.component.html',
  styleUrls: ['./manage-rides.component.scss']
})
export class ManageRidesComponent {

  currentRole : string = ''

  constructor (
    private readonly authService : AuthService,
    private readonly router : Router
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

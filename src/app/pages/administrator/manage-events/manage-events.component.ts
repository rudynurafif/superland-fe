import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.scss']
})
export class ManageEventsComponent {

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

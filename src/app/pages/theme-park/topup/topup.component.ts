import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss']
})
export class TopupComponent {

  constructor (
    private readonly http : HttpClient
  ) {}

  profileData : any = {}

  ngOnInit() {
    this.http.get<any>('/api/account/about-me').subscribe(data => {
      this.profileData = data
    })
  }

}

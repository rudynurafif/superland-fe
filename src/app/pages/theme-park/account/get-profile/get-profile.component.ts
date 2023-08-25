import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent {

  constructor(
    private readonly accountService : AccountService
  ) {}

  profileData : any = {}

  ngOnInit() {
    this.accountService.getAccInfo().subscribe(data => this.profileData = data)
  }
  


}

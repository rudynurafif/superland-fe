import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent {

  constructor(
    private readonly accountService : AccountService,
    private readonly http : HttpClient
  ) {}

  profileData : any = {}

  profileImage : string = ''
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  ngOnInit() {
    this.accountService.getAccInfo().subscribe(data => {
      this.profileData = data
      this.getImage()
    })
  }

  getImage() {
    this.http.get(`http://localhost:8085/img/userProfile/${this.profileImage}`).subscribe(
      res => {
        this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    )
  }
}

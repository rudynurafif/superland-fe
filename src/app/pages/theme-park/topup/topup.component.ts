import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TopupService } from './topup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss']
})
export class TopupComponent {

  constructor (
    private readonly http : HttpClient,
    private readonly topUpService : TopupService
  ) {}

  profileData : any = {}

  cards: any[] = [
    { title: "500", buttonText: 50000, pointValue : 500 },
    { title: "1000", buttonText: 100000, pointValue : 1000 },
    { title: "2000", buttonText: 200000, pointValue : 2000 },
    { title: "5000", buttonText: 500.000, pointValue : 5000 },
    { title: "10000", buttonText: 1000000, pointValue : 10000 },
    { title: "15000", buttonText: 1500000, pointValue : 15000 }
  ];

  ngOnInit() {
    this.http.get<any>('/api/account/about-me').subscribe(data => {
      this.profileData = data
    })
  }

  topupPoint(point: number): void {
    this.topUpService.topup(point).subscribe(
      response => {
        Swal.fire({
          title: `<strong>Top Up Point <u>${point}</u></strong>`,
          icon: 'info',
          html:
            'Are you sure want to proceed top up?',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            `<a href="${response.data.redirect_url}" style="color: inherit; text-decoration: none;" target="_blank">
            <i class="fa fa-thumbs-up"></i> Yes!
          </a>`,
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
            'Cancel',
          cancelButtonAriaLabel: 'Thumbs down'
        })
      },
      error => {
        // Tangani error di sini jika diperlukan
      }
    );
  }



}

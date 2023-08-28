import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TopupService } from './topup.service';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss']
})
export class TopupComponent {

  constructor (
    private readonly http : HttpClient,
    private readonly topUpService : TopupService,
    private readonly loaderService : LoaderService
  ) {}

  profileData : any = {}
  loading : boolean = false

  cards: any[] = [
    { price: 50000, pointValue : 500 },
    { price: 100000, pointValue : 1000 },
    { price: 200000, pointValue : 2000 },
    { price: 500000, pointValue : 5000 },
    { price: 1000000, pointValue : 10000 },
    { price: 1500000, pointValue : 15000 }
  ];

  ngOnInit() {
    this.http.get<any>('/api/account/about-me').subscribe(data => {
      this.profileData = data
    })
  }

  topupPoint(point: number): void {
    this.loaderService.getLoading().subscribe(loading => {
      this.loading = loading
    })

    this.loaderService.setLoading(true)

    this.topUpService.topup(point).subscribe({
      next: response => {
        console.log(response)
        Swal.fire({
          title: `<strong>Top Up Point <u>${point}</u></strong>`,
          icon: 'question',
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
        });
      },
      error: error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        });
      },
      complete : () => this.loaderService.setLoading(false)
    });
  }

}

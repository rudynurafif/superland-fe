import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent {

  constructor(
    private readonly accountService : AccountService,
    private readonly http : HttpClient,
    private readonly loaderService : LoaderService
  ) {}

  profileData : any = {}
  loading : boolean = false

  ngOnInit() {
    this.loaderService.getLoading().subscribe(loading => {
      this.loading = loading
    })
    
    this.accountService.getAccInfo().subscribe({
      next : (res) => {
        this.profileData = res
      },
      error : (err) => {
        console.log('error : ', err)
        Swal.fire('Error')
      },
      complete: () => {
        this.loaderService.setLoading(false)
      }
    })
  }

}

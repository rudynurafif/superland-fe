import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
import { VerifyRequest } from '../shared/model/verify-request.model';
import { LoaderService } from '../shared/component/loader/loader.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  loading : boolean = false

  constructor( 
    private readonly http : HttpClient,
    private readonly router : Router,
    private readonly authService : AuthService,
    private readonly loaderService : LoaderService
  ) {}

  verificationForm : FormGroup = new FormGroup({
    verificationCode : new FormControl('', Validators.required)
  })

  verify(token : string) {
    this.loaderService.getLoading().subscribe(loading => {
      this.loading = loading
    })

    let data : VerifyRequest = {
      name : "name",
      token : this.verificationForm.get("verificationCode")?.value
    };

    console.log(data)
    console.log(token)

    this.loaderService.setLoading(true)
    this.authService.verify(data).subscribe({
      next : res => {
        Swal.fire({
          icon: 'success',
          title: 'Verification Success!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res)
        this.router.navigateByUrl('/login')
      },
      error : (err) => {
        console.log("Error : ", err)
        Swal.fire('Invalid verification code!')
      },
      complete : () => {
        this.loaderService.setLoading(false)
      }
    })
  }

}

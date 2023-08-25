import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {

  constructor( 
    private readonly http : HttpClient,
    private readonly router : Router,
    private readonly service : AuthService
  ) {}

  verificationForm : FormGroup = new FormGroup({
    verificationCode : new FormControl('', Validators.required)
  })

  verify(token : string) {
    console.log(token)
    this.service.verify(token).subscribe({
      next : res => {
        Swal.fire({
          icon: 'success',
          title: 'Verification Success!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/superland')
      }
    })
  }

}

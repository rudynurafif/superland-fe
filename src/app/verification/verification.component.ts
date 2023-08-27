import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
import { VerifyRequest } from '../shared/model/verify-request.model';

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
    let data:VerifyRequest={
      name:"name",
      token:this.verificationForm.get("verificationCode")?.value
    };
    console.log(data)
   
    console.log(token)
    this.service.verify(data).subscribe({
      next : res => {
        Swal.fire({
          icon: 'success',
          title: 'Verification Success!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res)
        this.router.navigateByUrl('/login')
        // this.router.navigate(['/superland'])
      }
    })
  }

}

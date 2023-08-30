import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthRequest } from '../model/auth-request.model';
import Swal from 'sweetalert2';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading : boolean = false

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private service : AuthService,
    private loaderService : LoaderService
  ) {}

  loginForm : FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })  

  login(data: AuthRequest) {
    this.loaderService.getLoading().subscribe(loading => {
      this.loading = loading
    })

    console.log("Login Request : ", data)
    
    this.loaderService.setLoading(true)
    
    this.service.login(data).subscribe({
      next : (res) => {
        console.log("Response : ", res)
        let token = res.jwt
        let role = res.user.authorities[0].authority
        if (token && role === "USER") {
          sessionStorage.setItem('token', token)
          Swal.fire({
            icon: 'success',
            title: 'Successfully login!',
            showConfirmButton: false,
            timer: 1500
          })
          this.service.setRole(res.user.authorities[0].authority)
          this.loginForm.reset()
          this.router.navigateByUrl('/superland/set-profile-image')
        }
        if (token && role === "ADMIN") {
          sessionStorage.setItem('token', token)
          this.service.setRole("ADMIN")
          Swal.fire({
            icon: 'success',
            title: 'Successfully login as admin!',
            showConfirmButton: false,
            timer: 1500
          })
          this.loginForm.reset()
          this.router.navigateByUrl('/superland/home-admin')
        }
      },
      error : (err) => {
        console.log("Error : ", err)
        Swal.fire('Invalid username / password')
      },
      complete : () => {
        this.loaderService.setLoading(false)
      }
    })

  }

}

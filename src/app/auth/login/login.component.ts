import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserRequest } from '../model/user-request.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private service : AuthService
  ) {}

  loginForm : FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })  

  login(data: UserRequest) {
    console.log("Login Request : ", data)
    this.service.login(data).subscribe({
      next : (res) => {
        console.log("Response : ", res)
        let token = res.jwt
        console.log(token)
        if (token) {
          sessionStorage.setItem('token', token)
          Swal.fire({
            icon: 'success',
            title: 'Successfully login!',
            showConfirmButton: false,
            timer: 1500
          })
          this.loginForm.reset()
          this.router.navigateByUrl('/set-profile-image')
        }
      },
      error : (err) => {
        console.log("Error : ", err)
        Swal.fire('Invalid username / password')
      }
    })
  }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';  
import { AuthRequest } from '../model/auth-request.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm !: FormGroup

  constructor( 
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router,
    private service : AuthService
    ) {}

  ngOnInit() : void {
    this.registerForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  form(property : string) : FormGroup {
    return this.registerForm.get(property) as FormGroup
  }

  register(data : AuthRequest) {
    this.service.register(data).subscribe(res => {
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Register successfull',
        showConfirmButton: false,
        timer: 1500
      }) 
      this.registerForm.reset()
      this.router.navigate(['/verification'])
    }, err => {
      Swal.fire('Something went wrong..')
      this.router.navigateByUrl('/register')
    })
  }

}

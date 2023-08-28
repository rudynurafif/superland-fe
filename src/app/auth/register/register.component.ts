import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';  
import { AuthRequest } from '../model/auth-request.model';
import { LoaderService } from 'src/app/shared/component/loader/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm !: FormGroup
  loading : boolean = false


  constructor( 
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router,
    private authService : AuthService,
    private loaderService : LoaderService
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
    this.loaderService.getLoading().subscribe(loading => {
      this.loading = loading
    })

    this.loaderService.setLoading(true)

    this.authService.register(data).subscribe({
      next : (res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: 'Register successfull',
          showConfirmButton: false,
          timer: 1500
        }) 
        this.registerForm.reset()
        this.router.navigate(['/verification'])
      },
      error : err => {
        Swal.fire('Something went wrong..')
        this.router.navigateByUrl('/register')
      },
      complete : () => this.loaderService.setLoading(false)
    })

    // this.authService.register(data).subscribe(res => {
    //   console.log(res)
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Register successfull',
    //     showConfirmButton: false,
    //     timer: 1500
    //   }) 
    //   this.registerForm.reset()
    //   this.router.navigate(['/verification'])
    // }, err => {
    //   Swal.fire('Something went wrong..')
    //   this.router.navigateByUrl('/register')
    // })
  }

}

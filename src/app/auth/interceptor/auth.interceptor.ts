import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly router : Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');
    return next.handle(request.clone({setHeaders: {authorization: `Bearer ${token}`}}))
      .pipe(catchError(err => {
        if (err.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not authorized!'
          });
          this.router.navigateByUrl('/login');
        } else if (err.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not found!'
          });
          // this.router.navigateByUrl('/login');
        }
        return throwError(err)
      }));
  } 
}

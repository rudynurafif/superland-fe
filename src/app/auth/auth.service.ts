import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from './model/auth-request.model';
import { VerifyResponse } from '../shared/model/verify-response.model';
import { VerifyRequest } from '../shared/model/verify-request.model';
import { RegisterResponse } from './model/register-response.model';
import { LoginResponse } from './model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public register (data : AuthRequest) : Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('/api/auth/register', data)
  }
  
  public verify (token : VerifyRequest) : Observable<VerifyResponse> {  
    return this.http.post<VerifyResponse>(`/api/auth/verify`, token)
  }

  public login (data : AuthRequest) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', data)
  }

}

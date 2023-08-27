import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseWrapper } from '../shared/model/user-response.model';
import { AuthRequest } from './model/auth-request.model';
import { VerifyResponse } from '../shared/model/verify-response.model';
import { VerifyRequest } from '../shared/model/verify-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public register (data : AuthRequest) : Observable<any> {
    return this.http.post<AuthRequest>('/api/auth/register', data)
  }
  
  public verify (token : VerifyRequest) : Observable<VerifyResponse> {  
    return this.http.post<VerifyResponse>(`/api/auth/verify`, token)
  }

  public login (data : AuthRequest) : Observable<any> {
    return this.http.post<AuthRequest>('/api/auth/login', data)
  }


  
}

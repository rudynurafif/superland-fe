import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseWrapper } from '../shared/model/user-response.model';
import { AuthRequest } from './model/auth-request.model';

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
  
  public verify (token : string) : Observable<any> {  
    return this.http.post<string>(`/api/auth/verify/${token}`, '')
  }

  public login (data : AuthRequest) : Observable<any> {
    return this.http.post<AuthRequest>('/api/auth/login', data)
  }


  
}

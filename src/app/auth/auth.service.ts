import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseWrapper } from '../shared/model/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public login (data : any) : Observable<any> {
    return this.http.post<UserResponseWrapper>('/api/auth/login', data)
  }

  public register (data : any) : Observable<any> {
    return this.http.post<UserResponseWrapper>('/api/auth/register-admin', data)
  }
}

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

  public register (data : any) : Observable<any> {
    return this.http.post<any>('/api/auth/register', data)
  }
  
  public verify (token : string) : Observable<any> {
    return this.http.post<any>(`/api/auth/verify/${token}`, '')
  }

  public login (data : any) : Observable<any> {
    return this.http.post<any>('/api/auth/login', data)
  }


  
}

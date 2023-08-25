import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public getAccInfo () : Observable<any> {
    return this.http.get<any>('/api/account/about-me')
  }

  public setProfileImage (data : any) : Observable<string> {
    return this.http.post<string>('/api/account/set-profile-picture', data)
  }

}

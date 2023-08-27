import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProfileResponse } from './model/get-profile-response.model';
import { SetProfilePictureResponse } from './model/set-profile-picture-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private readonly http : HttpClient
  ) { }

  public getAccInfo () : Observable<GetProfileResponse> {
    return this.http.get<GetProfileResponse>('/api/account/about-me')
  }
  
  public setProfileImage(data: FormData): Observable<SetProfilePictureResponse> {
    return this.http.post<SetProfilePictureResponse>('/api/account/set-profile-picture', data);
  }
}

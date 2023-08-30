import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './game.response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor(private http: HttpClient  ) { }
  pay(endpoint: string): Observable<ApiResponse> {
     const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get<ApiResponse>(`api/game/scan/${endpoint}`,{ headers });
  }
  getInfoGame(endpoint: string): Observable<ApiResponse> {
     const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get<ApiResponse>(`api/game/get-info/${endpoint}`,{ headers });
  }
}

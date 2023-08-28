import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './game.response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor(private http: HttpClient  ) { }
  token:string = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjkzMjE1OTUzLCJyb2xlcyI6IkFETUlOIn0.klH4lvjjSRmq6QThWWJ-RXIB9ka13jTwmd30K18g8O2YG5rgzH4yHjoPZoAzW1xAEAj7RPQf05I_ExDjOfSfk-DBtmuQubkU6RIWBQrQwosDJhi2Ff-AbVUwV6SnAlCdWyIgblHbw7uDq7k2ecRT2irRG3JCh6AgoBn9dfshJUK6apc_j-fYa0JMYUeqc_d7P_PDl9nFaWNriUCrDI0rIQcvUkinDfnu-JFgTFL8OxCtNZEwzmkWJj0PXUBCl5oXTm0X8hFICjkWjKrnEVUpLJWyGhF3tbGsVA9jyT6MaV_VFYtT6yc9f9RhhDBQjv77ixZDIpqgISevGyYMZc2x5w"
    pay(endpoint: string): Observable<ApiResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ApiResponse>(`api/game/scan/${endpoint}`, { headers });
  }
  getInfoGame(endpoint: string): Observable<ApiResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ApiResponse>(`game/get-info/${endpoint}`, { headers });
  }
}

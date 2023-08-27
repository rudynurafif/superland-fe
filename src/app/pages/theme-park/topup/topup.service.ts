import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopupService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public topup(point : number) : Observable<any> {
    return this.http.post<any>(`api/payment/request/${point}`, point)
  }


}

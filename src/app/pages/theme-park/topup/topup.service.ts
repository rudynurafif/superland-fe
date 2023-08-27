import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentResponse, ResponseWrapper } from 'src/app/shared/model/payment-response.model';

@Injectable({
  providedIn: 'root'
})
export class TopupService {

  constructor(
    private readonly http : HttpClient
  ) { }

  public topup(point : number) : Observable<ResponseWrapper<PaymentResponse>> {
    return this.http.post<ResponseWrapper<PaymentResponse>>(`api/payment/request/${point}`, point)
  }


}

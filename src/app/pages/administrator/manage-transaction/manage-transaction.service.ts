import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTransactionService {

  constructor(
    private readonly http : HttpClient
  ) { }

  getTransactionList() : Observable<any> {
    return this.http.get('http://localhost:3000/transactions')
  }
}

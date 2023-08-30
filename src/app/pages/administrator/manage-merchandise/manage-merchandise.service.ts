import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageMerchandiseService {

  constructor(
    private http : HttpClient
  ) { }

  addMerchandise(data : any) : Observable<any> {
    return this.http.post('http://localhost:3000/merchandise', data)
  }

  getMerchandiseList() : Observable<any> {
    return this.http.get('http://localhost:3000/merchandise')
  }

  updateMerchandise(id : number, data : any) : Observable<any> {
    return this.http.put(`http://localhost:3000/merchandise/${id}`, data)
  }

  deleteMerchandise(id : number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/merchandise/${id}`)
  }
}

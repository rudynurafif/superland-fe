import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageRidesService {

  constructor(
    private http : HttpClient
  ) { }

  addRides(data : any) : Observable<any> {
    return this.http.post('http://localhost:3000/rides', data)
  }

  getRidesList() : Observable<any> {
    return this.http.get('http://localhost:3000/rides')
  }

  updateRides(id : number, data : any) : Observable<any> {
    return this.http.post(`http://localhost:3000/rides/${id}`, data)
  }

  deleteRides(id : number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/rides/${id}`)
  }


}

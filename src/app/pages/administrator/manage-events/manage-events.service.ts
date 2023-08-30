import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {

  constructor(
    private http : HttpClient
  ) { }

  addEvents(data : any) : Observable<any> {
    return this.http.post('http://localhost:3000/events', data)
  }

  getEventsList() : Observable<any> {
    return this.http.get('http://localhost:3000/events')
  }

  updateEvents(id : number, data : any) : Observable<any> {
    return this.http.put(`http://localhost:3000/events/${id}`, data)
  }

  deleteEvents(id : number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/events/${id}`)
  }
}

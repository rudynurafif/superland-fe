import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTenantsService {

  constructor(
    private http : HttpClient
  ) { }

  addTenant(data : any) : Observable<any> {
    return this.http.post('http://localhost:3000/tenants', data)
  }

  getTenantList() : Observable<any> {
    return this.http.get('http://localhost:3000/tenants')
  }

  updateTenant(id : number, data : any) : Observable<any> {
    return this.http.put(`http://localhost:3000/tenants/${id}`, data)
  }

  deleteTenant(id : number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/tenants/${id}`)
  }
}

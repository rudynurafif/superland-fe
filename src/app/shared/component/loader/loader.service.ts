import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false)

  constructor() { }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  getLoading() {
    return this.loadingSubject.asObservable();
  }
}

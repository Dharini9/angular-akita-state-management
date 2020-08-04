import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params: HttpParams = new HttpParams(), externalUrlDomail: string = ''): Observable<any> {
    return this.http.get(`${path}`, { params }).pipe(catchError(error => of(error)));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, JSON.stringify(body)).pipe(catchError(error => of(error)));
  }

  post(path: string, body: Object = {}, externalUrlDomain?: string, isFormData: boolean = false): Observable<any> {
    return this.http.post(`${path}`, body).pipe(catchError(error => of(error)));
  }

  delete(path, externalUrlDomail: string = ''): Observable<any> {
    return this.http.delete(`${path}`).pipe(catchError(error => of(error)));
  }
}

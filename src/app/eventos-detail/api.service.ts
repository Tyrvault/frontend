import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 1335c1988891d3dc9bc3779918b5847118720f33';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getEvento(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'patobands/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateEvento(evento: any) : Observable<any> {
    return this.http.put(this.baseUrl + 'patobands/' + evento.id + '/', evento,
    {headers: this.httpHeaders});
  };

}

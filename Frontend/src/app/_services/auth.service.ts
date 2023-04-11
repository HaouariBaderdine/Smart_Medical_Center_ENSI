import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register_medecin(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup/medecin',data,httpOptions
    );
  }

  register_patient(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup/client',data,httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/reponse/advice/';
const API_URL_ID = 'http://localhost:8080/api/reponse/';
const API_URL_LIKE = 'http://localhost:8080/api/advice/like';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient) { }

  createOne(data: any): Observable<any> {
    return this.http.post(API_URL, data );
  }

  getAllByAdvice(idAdvice: any): Observable<any> {
    return this.http.get(`${API_URL}/${idAdvice}`);  
  }

  get(id: any): Observable<any> {
    return this.http.get(`${API_URL_ID}/${id}`);
  }

  updateOne(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  updateEtat(id: any): Observable<any> {
    return this.http.put(`${API_URL_LIKE}/${id}`, null);
  }

  deleteOne(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}

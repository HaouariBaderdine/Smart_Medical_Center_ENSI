import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/cabinet/';
const API_URL_MEDECIN = 'http://localhost:8080/api/cabinet/medecin';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(private http: HttpClient) { }

  createOne(data: any): Observable<any> {
    return this.http.post(API_URL, data );
  }

  get(id: any): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  getByMedecin(idMedecin: any): Observable<any> {
    return this.http.get(`${API_URL_MEDECIN}/${idMedecin}`);
  }

  updateOne(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

}

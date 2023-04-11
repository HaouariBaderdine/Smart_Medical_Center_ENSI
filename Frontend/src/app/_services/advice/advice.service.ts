import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/advices/';
const API_URL_id = 'http://localhost:8080/api/advices';
const API_URL_ETAT = 'http://localhost:8080/api/advices/etat/';
const API_URL_MEDECIN = 'http://localhost:8080/api/advices/medecin';
const API_URL_PATIENT = 'http://localhost:8080/api/advices/demandeur';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  createOne(data: any): Observable<any> {
    return this.http.post(API_URL, data );
  }

  getAllByPatient(idPatient: any): Observable<any> {
    return this.http.get(`${API_URL_PATIENT}/${idPatient}`);  
  }

  getAllByMedecin(idMedecin: any): Observable<any> {
    return this.http.get(`${API_URL_MEDECIN}/${idMedecin}`);  
  }

  get(id: any): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  updateOne(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  updateEtat(id: any): Observable<any> {
    return this.http.put(`${API_URL_ETAT}/${id}`, null);
  }

  deleteOne(id: any): Observable<any> {
    return this.http.delete(`${API_URL_id}/${id}`);
  }


}

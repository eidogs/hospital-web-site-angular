import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Doctor } from './doctors/doctor';
import { Speciality } from './specialities/speciality';
import { Service } from './services/service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private doctorsUrl = "api/doctors";
  private specialitiesUrl = "api/specialities";
  private servicesUrl = "api/services";

  constructor(private http: HttpClient) { }

  handleError(error: any) {
    console.log(error); 
    return throwError(error.status);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.apiUrl + this.doctorsUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(environment.apiUrl + this.servicesUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }

  getSpecialities(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(environment.apiUrl + this.specialitiesUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }
}

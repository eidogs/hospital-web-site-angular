import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { ContactData } from './contactData';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactUrl = 'api/messages';

  constructor(private http: HttpClient) { }

  postMessage(contactData: ContactData) {
    return this.http.post<ContactData>(environment.apiUrl + this.contactUrl, contactData)
    .pipe(
      catchError((error: any) => {
        console.log(error.status);
        return throwError(error.status);
      })
    );
  }
}

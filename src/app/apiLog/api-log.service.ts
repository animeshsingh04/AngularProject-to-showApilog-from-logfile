import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IApiLog } from './api-log';
import { tap, catchError } from 'rxjs/Operators';


@Injectable({
    providedIn: 'root'
})

export class ApiLogService {

    private LogUrl = 'api/logs/products.json';

    constructor(private http: HttpClient) {}

    getApiLogs() {
        return this.http.get<string[]>(this.LogUrl)
        .pipe(
            tap(),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
      } else {
        errorMessage =  `Server returned code: ${err.status}, error message is: $"{err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

}
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _http = inject(HttpClient);

  constructor() { }

  getUsersList(): Observable<any> {
    return this._http.get<any>('http://localhost:5501/users').pipe(
      catchError(this.handleError)
    );
  }

  registerUser(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:5501/users', user).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(user: User): Observable<any> {
    return this._http.get<any>('http://localhost:5501/users').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

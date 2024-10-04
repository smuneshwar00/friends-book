import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _http = inject(HttpClient);

  loggedUser!: User | null;

  constructor() { }

  getUsersList(): Observable<any> {
    return this._http.get<any>('http://localhost:5501/users').pipe(
      catchError(this.handleError)
    );
  }

  getUrl = 'http://localhost:5501/users?email=';
  getUser(email: string): Observable<any> {
    //this.getUrl+=email;
    //console.log(this.getUrl)
    // return this._http.get<any>(this.getUrl+email).pipe(
    //   catchError(this.handleError)
    // );

    return this._http.get<any>(this.getUrl+email).pipe(
      map(data => data as unknown as User)
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

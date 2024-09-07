//import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //_http = inject(HttpClient);

  constructor() { }

  // getUsersList(){
  //   return this._http.get('http://localhost:5501/users');
  // }
}

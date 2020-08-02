import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = '/api/signin';

  constructor(private http: HttpClient) { }

  geTokenAuth(credentials: {login: string, pessowrd: string}){
     return this.http.post(this.loginUrl, credentials);
  }


}

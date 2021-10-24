import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Client} from '../common/client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private token: string | undefined;
  private user: any ;
  private tokenTimer: any;
  private url = 'http://localhost:8081/auth';

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: Client): Observable<{ jwt: any , id: string , role: string }> {
    return this.http.post<{ jwt: any , id: string , role: string }>(this.url + '/signup' , user);
  }

  // tslint:disable-next-line:typedef
  login(email: string, password: string)  {
    return this.http.post<{ jwt: any , id: string , role: string }>(this.url + '/login', {
      email,
      password });
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  saveAuthData(token: string, id: string , role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('id' , id);
    localStorage.setItem('role' , role);
  }

  // tslint:disable-next-line:typedef
  getUserId() {
    return localStorage.getItem('id');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from '../models/authData';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  getToken(){
    this.getAuthData();
    return this.token
  }

  getStatus() {
    return this.http.get<Array<AuthData>>('http://localhost:3000/api/auth');
  }

  setToken(value){
    this.token = value;
  }

  getTokenStatus() {
    this.getAuthData();
    return this.http.get<boolean>('http://localhost:3000/api/auth/tokenstatus');
  }

  createUser(email: any, password: any){
    const authData: AuthData = { email: email.value, password: password.value}
    console.log(authData);
    return this.http.post('http://localhost:3000/api/auth/signup', authData)
      
  }

  login(email: any, password: any){
    const authData: AuthData = { email: email.value, password: password.value}
    return this.http.post<{token: string}>('http://localhost:3000/api/auth/signin', authData)
  }

  logout(){
    this.token = null;
    this.router.navigate['/'];
    this.clearAuthData();
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    if(!token){
      return
    }
    this.token = token;
  }

  private clearAuthData(){
    localStorage.removeItem('token');
  }
}
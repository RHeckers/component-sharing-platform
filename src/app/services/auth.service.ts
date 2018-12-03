import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthData } from '../models/authData';
import { Router } from '@angular/router';
import { ErrorSuccessMsgService } from './error-success-msg.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  private user = new BehaviorSubject<User>(undefined);
  private authenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private errorSuccess: ErrorSuccessMsgService) { 
    
  }

  getToken(){
    this.getAuthData();
    return this.token
  }

  setToken(value){ 
    this.token = value;
  }

  getAuthStatusListener(){
    return this.authenticated.asObservable();
  }

  getUser(){
    return this.user.asObservable();
  }

  getTokenStatus() {
    return this.http.get<{auth: boolean, user: User}>('http://localhost:3000/api/auth/current').subscribe(res => {
      this.user.next(res.user);
      this.authenticated.next(res.auth);
      
    }, error => {
      this.authenticated.next(false);
      console.log(error);
    });
  }


  createUser(email: any, password: any){
    const authData: AuthData = { email: email.value, password: password.value}
    return this.http.post('http://localhost:3000/api/auth/signup', authData);
  }

  login(email: any, password: any){
    const authData: AuthData = { email: email.value, password: password.value}
    this.http.post<{token: string, user: any}>('http://localhost:3000/api/auth/signin', authData).subscribe(res => {
      const token = res.token;

      this.setToken(token)
      this.saveAuthData(token);
      this.router.navigate(['/']);

      this.authenticated.next(true);
      this.user = res.user
      console.log(this.user);
    }, err => console.log(err));
  }

  logout(){
    this.token = null;
    this.router.navigate['/'];
    this.clearAuthData();
  }


  private saveAuthData(token: string){
    localStorage.setItem('token', token);
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
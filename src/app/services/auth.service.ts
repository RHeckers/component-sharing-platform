import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from '../models/authData';
import { Router } from '@angular/router';
import { ErrorSuccessMsgService } from './error-success-msg.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  private authenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private errorSuccess: ErrorSuccessMsgService) { }

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

  getTokenStatus() {
    return this.http.get<boolean>('http://localhost:3000/api/auth/tokenstatus').subscribe(res => {
      this.authenticated.next(res);
      
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
    this.http.post<{token: string}>('http://localhost:3000/api/auth/signin', authData).subscribe(res => {
      const token = res.token;
      this.setToken(token)
      this.saveAuthData(token);
      this.router.navigate(['/']);
      this.authenticated.next(true);
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
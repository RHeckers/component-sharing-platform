import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ErrorSuccessMsgService } from 'src/app/services/error-success-msg.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormBox: HTMLElement;

  constructor(private errorSuccessMsg: ErrorSuccessMsgService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginFormBox = document.getElementById('loginFormBox');
    this.loginFormBox.style.height = window.innerHeight / 2 + 'px';
  }

  private submitLogin(email, password){
    if(!email.value || email.value == "" || email.value == null || email.value == undefined){
      this.errorSuccessMsg.insertMsgBefore("Email field is required", email, 5000, "error", "errorMsg");
      return;
    }else if(email.value.length < 6){
      this.errorSuccessMsg.insertMsgBefore("Email field should be at least 5 characters long", email, 5000, "error", "errorMsg");
      return;
    }
    if(!password.value || password.value == "" || password.value == null || password.value == undefined){
      this.errorSuccessMsg.insertMsgBefore("Password field is required", password, 5000, "error", "errorMsg"); 
      return;     
    }else if(password.value.length < 8){
      this.errorSuccessMsg.insertMsgBefore("Password field should be at least 8 characters long", password, 5000, "error", "errorMsg");
      return;
    }

    //Open loader here

    //Place code to signin below
    this.authService.login(email, password);
    // .subscribe(response => {
    //   if(response.token) {
    //     const token = response.token;
    //     this.authService.setToken(token)
    //     this.saveAuthData(token);
    //     this.router.navigate(['/']);
    //     this.autenticated.next(true);
    //   };
    // });
  }

  private submitRegister(email, password){
    if(!email.value || email.value == "" || email.value == null || email.value == undefined){
      this.errorSuccessMsg.insertMsgBefore("Email field is required", email, 5000, "error", "errorMsg");
      return;
    }else if(email.value.length < 6){
      this.errorSuccessMsg.insertMsgBefore("Email field should be at least 5 characters long", email, 5000, "error", "errorMsg");
      return;
    }
    if(!password.value || password.value == "" || password.value == null || password.value == undefined){
      this.errorSuccessMsg.insertMsgBefore("Password field is required", password, 5000, "error", "errorMsg"); 
      return;     
    }else if(password.value.length < 8){
      this.errorSuccessMsg.insertMsgBefore("Password field should be at least 8 characters long", password, 5000, "error", "errorMsg");
      return;
    }

    //Open loader here

    //Place code to signup below
    this.authService.createUser(email, password).subscribe(res =>{
      console.log(res)
    });
  }

}

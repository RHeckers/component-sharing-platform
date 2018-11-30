import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private authListenerSubscription: Subscription;
  userIsAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuth => {
      this.userIsAuthenticated = isAuth;
      console.log(this.userIsAuthenticated)
    });
  }

  ngOnDestroy() {
    this.authListenerSubscription.unsubscribe(); 
  }
 
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingleComponentComponent } from './components/single-component/single-component.component';
import { UploadNewComponentComponent } from './components/upload-new-component/upload-new-component.component';
import { LoginComponent } from './components/login/login.component';
import { MainControllesComponent } from './components/main-controlles/main-controlles.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { AuthInterceptorService } from './services/auth-interceptor';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponentComponent,
    UploadNewComponentComponent,
    LoginComponent,
    MainControllesComponent,
    SidemenuComponent,
    AccordeonComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

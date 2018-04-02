import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule  } from './modules/auth/auth.module';
import { HttpModule } from "@angular/http";

//services 
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { HttpService } from "./services/httpservice.service";

const Services = [
  AuthService ,
  UserService,
  HttpService
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [...Services],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from "./app.routing";
import {LoginGuard} from "./login/login-guard.service";
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import {AddUserComponent} from "./add-user/add-user.component";
import {UserService} from "./user.service";


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCrc5hbYDgKagYDcO7cBTcvOk813CTo6Ns",
  authDomain: "ctgs-ea771.firebaseapp.com",
  databaseURL: "https://ctgs-ea771.firebaseio.com",
  storageBucket: "ctgs-ea771.appspot.com",
  messagingSenderId: "80411482803"
};

const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    LoginComponent,
    RecommendationComponent,
    ApplicationCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouting,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config, authConfig)
  ],
  providers: [LoginGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

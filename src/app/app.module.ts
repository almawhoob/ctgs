import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCrc5hbYDgKagYDcO7cBTcvOk813CTo6Ns",
  authDomain: "ctgs-ea771.firebaseapp.com",
  databaseURL: "https://ctgs-ea771.firebaseio.com",
  storageBucket: "ctgs-ea771.appspot.com",
  messagingSenderId: "80411482803"
};

const appRoutes: Routes = [
  { path: 'application', component: HomeComponent },
  { path: 'home', component: LoginComponent }
];

const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config, authConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

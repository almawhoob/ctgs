import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userEmail="";
  userPassword="";
  title:string = 'CTGS';
  constructor(private router:Router, private af: AngularFire){}

  login() {
    console.log(this.userEmail);
    console.log(this.userPassword);
    if (this.af.auth.login()) {
      this.router.navigateByUrl('home');
    }
  }

}

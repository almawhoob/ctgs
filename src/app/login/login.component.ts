import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  title = 'CTGS';
  // items : FirebaseListObservable<any[]>;
  constructor(private router:Router, private af: AngularFire){
    // this.items = af.database.list('/items');
  }

  login() {
    if (this.af.auth.login()) {
      this.router.navigateByUrl('application');
    }
  }

}

import {Component} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title = "CTGS";

  constructor(private af: AngularFire, private router: Router) {

  }
  loginErrorMessage ="";



  login(formData){
    if (formData.valid) {
      console.log(formData.value);

      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      })

        .then(
        (success) => {
          console.log("successful login: " + success);
          this.router.navigate(['/home']);
        })

        .catch(
        (err) => {
          this.loginErrorMessage = err.message;
          console.log("ERROR MESSAGE: " + err.message);
        })

    } else {
      console.log("Invalid Form Entry");
    }

  }


}//end of class

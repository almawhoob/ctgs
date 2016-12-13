import {Component, OnInit, Injectable} from '@angular/core';
import {AngularFire, FirebaseAuth, FirebaseAppConfig, FirebaseAuthState, AngularFireAuth} from "angularfire2";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

@Injectable()
export class AddUserComponent {
  private currentUID;
  private queryList;
  private requesterForm = false;
  private supervisorForm = false;

  constructor(private af: AngularFire, private auth: FirebaseAuth,
              private userService: UserService, private router: Router) {
    this.af.auth.subscribe( auth =>{
      this.currentUID = userService.getUserId();
      console.log(auth.uid);
    })
    this.queryList = af.database.list('/user');
  }


  /* Creates a requester account */
  signUp(formValues) {
    formValues.role= "requester";
    console.log(formValues);
    this.userService.createUser(formValues);
  }

  /* Creates a supervisor account */
  signUpSupervisor(formValues) {
    formValues.role= "Supervisor";
    console.log(formValues);
    this.userService.createUser(formValues);
  }

  displayRequesterForm(){
    this.supervisorForm = false;
    this.requesterForm = true;
  }

  displaySupervisorForm(){
    this.requesterForm = false;
    this.supervisorForm = true;
  }


}//end of class

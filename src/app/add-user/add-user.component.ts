import {Component, OnInit, Injectable} from '@angular/core';
import {AngularFire, FirebaseAuth, FirebaseAppConfig, FirebaseAuthState, AngularFireAuth} from "angularfire2";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

@Injectable()
export class AddUserComponent {
  private db: any;
  private title = "Add USer"
  private currentUID;
  private queryList;

  constructor(private af: AngularFire, private auth: FirebaseAuth) {
    this.af.auth.subscribe( auth =>{
      this.currentUID = auth.uid;
      console.log(auth.uid);
    })
    this.queryList = af.database.list('/user');
  }
  signUp(formValues) {
    formValues.role= "requester";
    delete formValues['password'];
    console.log(formValues);
    this.af.auth.createUser(formValues).then(
      (success) => {
        console.log(success);
        this.af.database.object('user/'+this.currentUID).set(
          formValues).then((user) => {
          this.af.database.object('user/' + this.currentUID).update({
            userID: this.currentUID,
          });
          console.log('User added! ' + this.currentUID)
        });
      }).catch(
      (err) => {
        console.log(err);
      });
  }
}

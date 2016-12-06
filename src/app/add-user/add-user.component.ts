import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseAuth, FirebaseAppConfig, FirebaseAuthState, AngularFireAuth} from "angularfire2";
import {Router} from "@angular/router";
import {NgForm} from '@angular/forms';
import {userInfo} from "os";
import {createCredentials} from "crypto";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  title ='Create User';
  private currentUID;
  user
  password
  email
  surname
  given_name
  faculty_number
  //attributes for requester
  academic_unit
  program_of_study
  session_number
  thesis_topic
  supervisorID
  bacn_acct_num

  //attr for supervisor
  grandt_acct_nums

  constructor(private af: AngularFire, private router: Router) {
    this.af=af;
    this.af.auth.subscribe( auth =>{
        this.currentUID = auth.uid;
        console.log(auth.uid);
         })
  }




  requester(formData: any) {

  this.af.database.list("user/requester").push(formData).then((user)=> {
    this.af.database.object('user/requester/' + user.key).update({
      email: this.email,
      surName: this.surname,
      givenName: this.given_name,
      password: this.email,
      facultyNumber: this.faculty_number,
      academicUnit: this.academic_unit,
      sessionNumer: this.session_number,
      programStudy: this.program_of_study,
      thesisTopic: this.thesis_topic,
      supervisorID: this.supervisorID



    })
    console.log('User pushed!' + user.key)
  });
  this.password = createCredentials(this.password);
  this.email = createCredentials(this.email);
    this.af.auth.createUser(this.email,this.password);
}

supervisor(formData: any) {
    this.af.database.list('user/supervisor').push(formData).then((user)=> {
      this.af.database.object('user/supervisor/' + user.key).update({
        surName: this.surname,
        givenName: this.given_name,
        password: this.password,
        facultyNumber: this.faculty_number,
        grandAccNum: this.grandt_acct_nums

      })
      console.log('User pushed!' + user.key)
    });

  }




  ngOnInit() {
  }

}

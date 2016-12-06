import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
// import * as firebase from 'firebase';


@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  acceptedConditions = false;     //Switch to true for testing purposes,
  title = 'Travel Grant Application';
  private db;
  private currentUID;
  private userProfile: any;
  private userObservable: any;

  constructor( private af: AngularFire, private router: Router) {
    // this.db = firebase.database();
    this.af.auth.subscribe( auth =>{
      this.currentUID = auth.uid;
      console.log(auth.uid);
      this.userObservable = this.af.database.object('user/' + auth.uid, {preserveSnapshot: true})
      this.userObservable.subscribe( snapshot => {
          this.userProfile = snapshot.val();
        }
      );
    })

  }

  ngOnInit() {
  }

  acceptTheConditions() {
    this.acceptedConditions = !this.acceptedConditions;
  }



  save(formValues: any) {
    console.log("Save clicked.");
    // var applicationKey = this.db.ref().child('applications').push().key;

      this.af.database.list('applications').push(formValues).then((application) => {
        this.af.database.object('applications/' + application.key).update({
          userID: this.currentUID,
          applicationID: application.key
        })
        console.log('Application pushed! ' + application.key);
        alert("Your application has been saved!")
      });
    // console.log(formData);

  }

  checkDates(startDate, endDate) {
    let sd = startDate.split('-');
    let ed = endDate.split('-');
    console.log('start: ' + sd);
    console.log('end: '+ ed);
    if(Number(sd[0]) > Number (ed[0])) {
      return false;
    }
    else if(Number(sd[1]) > Number (ed[1])) {
      return false;
    }
    else if(Number(sd[2]) > Number (ed[2])) {
      return false;
    }
    return true;
  }


  submit(formValues: any) {
    console.log("Submit clicked.");
    formValues["state"] = 'pendingRecommendation';

    if (!this.checkDates(formValues['conferenceStartDate'], formValues['conferenceEndDate']))
      window.alert("End date is before the first date");
    else {
      this.af.database.list('applications').push(formValues).then((application) => {
        this.af.database.object('applications/' + application.key).update({
          userID: this.currentUID,
          applicationID: application.key,
          supervisorID: this.userProfile.supervisorID
        });
        console.log('Application pushed! ' + application.key);
        alert("Your application has been submitted!")
        this.router.navigate(['/home'])
      });
    }
  }

  cancel() {
    console.log("Cancel clicked.");
    this.acceptTheConditions();
  }
}

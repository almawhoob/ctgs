import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {NgForm} from '@angular/forms';
// import * as firebase from 'firebase';


@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  acceptedConditions = true;     //Switch to true for testing purposes,
  title = 'Travel Grant Application';
  private db;
  private currentUID;

  constructor( private af: AngularFire ) {
    // this.db = firebase.database();
    this.af.auth.subscribe( auth =>{
      this.currentUID = auth.uid;
      console.log(auth.uid);
    })
  }

  ngOnInit() {
  }

  acceptTheConditions() {
    this.acceptedConditions = !this.acceptedConditions;
  }



  save(formData: any) {
    console.log("Save clicked.");
    // var applicationKey = this.db.ref().child('applications').push().key;
    if (!this.checkDates(formData['conferenceStartDate'], formData['conferenceEndDate']))
      window.alert("End date is before the first date");
    this.af.database.list('applications').push(formData).then( (application) => {
      this.af.database.object('applications/' + application.key). update({userID: this.currentUID, applicationID: application.key})
      console.log('Application pushed! ' + application.key)
    });
    // console.log(formData);

  }

  checkDates(startDate, endDate) {
    let sd = startDate.split('-');
    let ed = endDate.split('-');
    if(Number(sd[0]) > Number (ed[0])) {
      return false;
    }
    if(Number(sd[1]) > Number (ed[1])) {
      return false;
    }
    if(Number(sd[2]) > Number (ed[2])) {
      return false;
    }
    return true;
  }


  submit() {
    console.log("Submit clicked.");
  }

  cancel() {
    console.log("Cancel clicked.");
  }
}

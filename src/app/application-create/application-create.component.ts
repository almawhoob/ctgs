import {Component, OnInit, OnDestroy} from '@angular/core';
import { AngularFire } from 'angularfire2';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {ApplicationService} from "../application.service";
// import * as firebase from 'firebase';


@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent  {
  acceptedConditions = false;     //Switch to true for testing purposes,
  title = 'Travel Grant Application';
  private currentUID;
  private userValues: any;
  private applications: any;

  constructor( private applicationService: ApplicationService,
               private router: Router,
               private userService: UserService) {
     this.applications = applicationService.getApplications();
     this.userValues = userService.getUserValues();
     this.currentUID = userService.getUserId();
  }



  acceptTheConditions() {
    console.log(this.userValues);
    this.acceptedConditions = !this.acceptedConditions;
  }



  save(formValues: any) {
    console.log("Save clicked.");
      this.applications.push(formValues).then((application) => {
        this.applicationService.getApplication(application.key).update({
          userID: this.currentUID,
          applicationID: application.key
        })
        console.log('Application pushed! ' + application.key);
        alert("Your application has been saved!")
      });

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
      this.applications.push(formValues).then((application) => {
        this.applicationService.getApplication(application.key).update({
          userID: this.currentUID,
          applicationID: application.key,
          supervisorID: this.userValues.supervisorID
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

import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  title = "Make Recommendation";
  name = '';
  notes = '';

  private currentUID: any;
  private applicantInfo: any;
  private appRef: any;
  private appId: any;
  private appInfo: any;
  private isRejected: boolean = false;

  constructor(private af: AngularFire) {

    // get browsing-user id
    this.af.auth.subscribe( auth =>{
      this.currentUID = auth.uid;
      console.log(auth.uid);
    });

    // get application
    this.appId = '-KY6XVItrJQju-jeVHjA';
    // this.appRef = this.af.database.object('applications/' + this.appId);
    // console.log("Application Ref: " + this.appRef.value);

    this.appInfo = af.database.object('/applications/'+this.appId, { preserveSnapshot: true });
    this.appInfo.subscribe(snapshot => {
      this.appInfo = snapshot.val();
      console.log(snapshot.key);
      console.log(snapshot.val());

      this.appRef = af.database.object('/user/'+this.appInfo.userID, { preserveSnapshot: true });
      this.appRef.subscribe(snapshot => {
        this.applicantInfo = snapshot.val();
        console.log("APPLICANT KEY: " + snapshot.key);
        console.log("APPLICANT INFO: " + snapshot.val().name);
      });
    });

  }


  /* called in the page initiation */
  ngOnInit() {
    console.log();
  }


  /* rejects the application and display the rejection-notes form */
  reject() {
    this.isRejected = true;
    console.log("Attempt to reject this application!");
  }


  /* In case the supervisor clicked the rejection button by mistake, they can cancel the rejection action */
  cancel() {
    console.log("Attempt to cancel the rejection of this application!");
    this.isRejected = false;
  }


  /* accepts the application and sends a notification to the supervisor */
  accept() {
    console.log("Attempt to accept this application!");
    const itemObservable = this.af.database.object('applications/'+this.appInfo.applicationID);
    itemObservable.update({ state: 'accepted' });
  }


  /* submits the rejection notes and notify the applicant */
  returnApplication(formValues: any) {
  console.log("Attempt to return this applicatoin to the applicant!");
    // formValues["state"] = 'rejectedRecommendation';

    const itemObservable = this.af.database.object('applications/'+this.appInfo.applicationID);
    itemObservable.update({ state: 'rejected' });


    // this.af.database.list('applications/'+this.applicantInfo.applicationID).update({
    //   state: formValues["state"]
    // });
    //   .then( (application) => {
    //   this.af.database.object('applications/' + application.key). update({userID: this.currentUID, applicationID: application.key})
    //   console.log('Application pushed! ' + application.key)
    // });
  }

}

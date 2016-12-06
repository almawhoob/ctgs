import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private applicationList: any;

  constructor(private af: AngularFire, private router:Router) {

    this.applicationList = af.database.list('/applications');
    console.log("APPLICATION LIST: " + this.applicationList);

    // this.applicationList.subscribe(snapshot => {
    //   this.applicationList = snapshot.val();
    //   console.log(snapshot.key);
    //   console.log(snapshot.val());

      // this.appRef = af.database.object('/user/'+this.appInfo.userID, { preserveSnapshot: true });
      // this.appRef.subscribe(snapshot => {
      //   this.applicantInfo = snapshot.val();
      //   console.log("APPLICANT KEY: " + snapshot.key);
      //   console.log("APPLICANT INFO: " + snapshot.val().name);
      // });
    // });

  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }

}

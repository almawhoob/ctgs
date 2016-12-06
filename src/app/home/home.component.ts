import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  private applicationList: any;
  private userObservable: any;
  private userProfile: any;
  constructor(private af: AngularFire, private router:Router, private userService: UserService) {

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

  // isSupervisor() {
  //   return this.userProfile.role === 'Supervisor';
  // }
  //
  // isRequester(){
  //   console.log(this.userProfile)
  //   return this.userProfile.role === 'requester';
  // }

  // logout() {
  //   this.af.auth.logout();
  //   // console.log("The current user is: " + this.af.auth.getAuth().uid);
  //   this.router.navigateByUrl('/login');
  // }

  routeToApply(){
    this.router.navigate(['/apply']);
  }

}
;

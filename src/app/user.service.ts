import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  private userId;
  private userObservable;
  private userProfile;
  private userRole: any = '';

  constructor(private af: AngularFire, private router:Router) {
    this.af.auth.subscribe( auth =>{
        this.userObservable = this.af.database.object('user/' + auth.uid, {preserveSnapshot: true})
        console.log('Current User: ' + auth.uid);
        this.userId = auth.uid;
        let test = this.userObservable.subscribe( snapshot => {
            this.userProfile = snapshot.val();
            this.userRole = this.userProfile.role;
          }
        );
      }
    )
  }

  getUserId(){
    return this.userId;
  }

  isSupervisor() {
    return this.userRole === 'Supervisor';
  }

  isRequester(){
    return this.userRole === 'requester';
  }

  isAdmin(){
    return this.userRole === 'Admin';
  }

  logout() {
    this.af.auth.logout();
    // console.log("The current user is: " + this.af.auth.getAuth().uid);
    this.router.navigateByUrl('/login');
  }

}
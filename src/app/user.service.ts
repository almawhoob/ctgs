import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  private userId;
  private userObservable;
  private userProfile;
  private userRole: any = '';
  private userSubscription;
  private dbSubscription;

  constructor(private af: AngularFire, private router:Router) {
    this.userSubscription = this.af.auth.subscribe( auth =>{
        this.userObservable = this.af.database.object('user/' + auth.uid, {preserveSnapshot: true});
        this.userId = auth.uid;
        this.dbSubscription = this.userObservable.subscribe( snapshot => {
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

  createUser(formValues:any){
    this.af.auth.createUser(formValues).then(
      (success) => {
        console.log(success);
        delete formValues.password;
        this.af.database.object('user/'+this.userId).set(
          formValues).then((user) => {
          this.af.database.object('user/' + this.userId).update({
            userID: this.userId,
          });
          console.log('User added! ' + this.userId)
        });
      }).catch(
      (err) => {
        console.log(err);
      });
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
    this.userSubscription.unsubscribe();
    this.dbSubscription.unsubscribe();
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

}

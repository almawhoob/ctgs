import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {DatabaseService} from "./database.service";

@Injectable()
export class UserService {

  private userId;
  private userObservable;
  private userProfile;
  private userRole: any = '';
  private userSubscription;
  private dbSubscription;
  private database;

  constructor(private db: DatabaseService,
              private af: AngularFire,
              private router:Router) {
    this.database = db.getDatabase();
    this.userSubscription = this.af.auth.subscribe( auth =>{
        this.userId = auth.uid;
      }
    );
    this.userObservable = this.database.object('user/' + this.userId, {preserveSnapshot: true});
    this.dbSubscription = this.userObservable.subscribe( snapshot => {
        this.userProfile = snapshot.val();
        this.userRole = this.userProfile.role;
      }
    );
  }

  getUserId(){
    return this.userId;
  }

  createUser(formValues:any){
    this.af.auth.createUser(formValues).then(
      (success) => {
        console.log(success);
        delete formValues.password;
        this.database.object('user/'+this.userId).set(
          formValues).then((user) => {
          this.database.object('user/' + this.userId).update({
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

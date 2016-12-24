import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class DatabaseService {
private database: any;
private userSubscription;
private userId;

  constructor( private af: AngularFire) {
    this.userSubscription = this.af.auth.subscribe( auth =>{
        this.userId = auth.uid;
      }
    );
  }

  getUserId(){
    return this.userId;
  }

  public getDatabase(){
    this.database = this.af.database;
    return this.database;
  }

  unsubscribe(){
    this.userSubscription.unsubscribe();
  }

}

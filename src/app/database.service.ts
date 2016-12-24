import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class DatabaseService {
private database: any;

  constructor( private af: AngularFire) {
    this.af.auth.subscribe( auth =>{
    });
  }

  public getDatabase(){
    this.database = this.af.database;
    return this.database;
  }

}

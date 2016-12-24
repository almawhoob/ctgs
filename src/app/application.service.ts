import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";

@Injectable()
export class ApplicationService {
  private applications: any;
  private database: any;
  constructor(private db: DatabaseService) {
    this.database = db.getDatabase();
  }

  getApplications(){
    this.applications = this.database.list('/applications');
    return this.applications;
  }
}

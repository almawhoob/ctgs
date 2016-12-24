import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {ApplicationService} from "../application.service";
import {DatabaseService} from "../database.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService, ApplicationService, DatabaseService]
})
export class HomeComponent implements OnInit {

  private applications: any;
  constructor(private applicationService: ApplicationService,
              private router:Router,
              private userService: UserService) {
    this.applications = applicationService.getApplications();
  }

  ngOnInit() {
  }

}

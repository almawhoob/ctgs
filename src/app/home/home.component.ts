import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFire, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }

}

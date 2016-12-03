import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  acceptedConditions = true; // should be false
  title = 'Travel Grant Application';
  constructor(  ) {


  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }



  ngOnInit() {
  }


  acceptTheConditions() {
    this.acceptedConditions = !this.acceptedConditions;
  }

  save() {
    console.log("Save clicked.");
  }

  submit() {
    console.log("Submit clicked.");
  }

  cancel() {
    console.log("Cancel clicked.");
  }
}

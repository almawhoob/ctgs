import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  title = "Make Recommendation";
  name = '';
  notes = '';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { activities } from '../../assets/ts/activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  titles: Array<string> = Object.keys(activities);
  information = Object.values(activities);
  activities = activities;

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(title){
    return {'background-color': 'rebeccapurple'}
  }

}

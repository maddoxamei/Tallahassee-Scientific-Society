import { Component, OnInit } from '@angular/core';
import { faUsers, faChartPie, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  faUsers = faUsers;
  faChart = faChartPie;
  faFile = faFileAlt;

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { nav } from '../../assets/ts/nav-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbar: Array<string> = Object.keys(nav);
  subbar: string[][] = Object.values(nav);
  selected:string;

  constructor() { }

  ngOnInit(): void {
  }

  getSubNav(element:string): string {
    return nav[element];
  }

  hover(event: Event, element: string): void {
    event.stopPropagation();
    this.selected = element;
  }

  // stop hover event propogation and end the hover event
  hoverend(event: Event): void {
    event.stopPropagation();
    this.selected = null;
  }

}

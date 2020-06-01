import { Component, OnInit } from '@angular/core';
import { nav } from '../../assets/ts/nav-menu';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  navbar: Array<string> = Object.keys(nav);
  subbar: string[][] = Object.values(nav);

  constructor() { }

  ngOnInit(): void {
  }

  getSubNav(element:string): string {
    return nav[element];
  }

}

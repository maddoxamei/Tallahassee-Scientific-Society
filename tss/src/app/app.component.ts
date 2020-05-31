import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tss';

  public constructor(private titleService: Title ) {
    this.setTitle("TSS");
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CalendarComponent,
    ActivitiesComponent,
    BoardOfDirectorsComponent,
    DocumentationComponent,
    NewsletterComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

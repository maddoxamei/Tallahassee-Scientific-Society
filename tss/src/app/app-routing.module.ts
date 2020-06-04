import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { MissionComponent } from './mission/mission.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CalendarComponent } from './calendar/calendar.component';



const routes: Routes = [
  /*{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },*/
  { path: '', component: HomepageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'board of directors', component: BoardOfDirectorsComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'newsletters', component: NewsletterComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

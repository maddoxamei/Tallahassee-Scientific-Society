import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CalendarComponent } from './calendar/calendar.component';



const routes: Routes = [
  /*{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },*/
  { path: '', component: HomepageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'activities', component: ActivitiesComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Admin2Component } from './admin2/admin2.component';
import { AddCoachComponent } from './admin2/addCoach/addCoach.component';

const routes: Routes = [
  {path:'app-coach', component: CoachComponent},
  {path:'app-homepage', component: HomepageComponent},
  {path:'admin-home', component: AdminHomeComponent},
  {path:'admin2-page', component: Admin2Component},
  {path:'addcoach-page', component: AddCoachComponent},
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

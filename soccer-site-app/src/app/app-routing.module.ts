import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'app-coach', component: CoachComponent},
  {path:'app-homepage', component: HomepageComponent},
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

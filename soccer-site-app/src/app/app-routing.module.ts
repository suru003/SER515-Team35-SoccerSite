import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';

import { UserListComponent } from './userList/userList.component';

//App Component
import { AppComponent } from './app.component';



// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/dashboard/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './refereeDirector/refereeUserList/refereeUserList.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/refereeNewApplicationList/refereeNewApplicationList.component';
import { AddRefereeComponent } from './refereeDirector/addReferee/addReferee.component';
import { ViewMatches } from './refereeDirector/viewMatches/viewMatches';
import { LoginPageComponent } from './refereeDirector/loginPage/loginPage.component';

//Referees
import { LoginOrRegisterComponent } from './refereeDirector/loginOrRegister/loginOrRegister.component';
import { RegisterRefereeComponent } from './refereeDirector/register/registerReferee.component';


// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournamentList/tournamentList.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';

//Team Director
import { TeamDirectorComponent } from './teamDirector/dashboard/teamDirectorDashboard.component';
import { TeamsListComponent } from './teamDirector/teamsList/teamsList.component';
import { TeamNewApplicationListComponent } from './teamDirector/teamNewApplicationList/teamNewApplicationList.component';



//F.A.Q. 
import { FAQPageComponent } from './faqpage/faqpage.component';

//Team Application
import { TeamApplicationComponent } from './teamApplication/teamApplication/teamApplication.component';
import { TeamLoginOrRegisterComponent } from './teamApplication/loginOrRegister/loginOrRegister.component';

//Teams, Schedules, Scores
import { SearchMatchScheduleComponent } from './matchSchedules/searchMatchSchedule/searchMatchSchedule.component';



const routes: Routes = [
{

  path:'app-root', component: AppComponent,
  children:[
  {
   path:'teamApplication', component:TeamApplicationComponent,
 },
 {
   path:'refereeLoginOrRegister', component:LoginOrRegisterComponent
 },
 {
   path:'searchMatchSchedule', component:SearchMatchScheduleComponent
 },
 ]
},
  {
    path:'home', component: AppComponent
  },

{path:'app-coach', component: CoachComponent},
  // {path:'app-homepage', component: HomepageComponent},
  {path:'admin-home', children:[
  { path:'', component: AdminHomeComponent },
  ]
}, 
  // {path:'allusers', component: UserListComponent},
  // {path:'add-referee', component: AddRefereeComponent},
  {
    path:'loginPage', component: LoginPageComponent
  },
  {
    path:'tournamentDirectorLoginPage', component: TournamentDirectorLoginPageComponent
  },
  {
    path:'tournamentDirectorDashboard', component: TournamentDirectorDashboardComponent,
    children:[
    {
      path:'addTournament', component: AddTournamentComponent
    },
    {
      path:'tournamentList', component: TournamentListComponent
    }
    ]
  },
  {
    path:'teamsDashboard', component: TeamsDashboardComponent
  },
  {path:'refereeDirectorHomepage', component: RefereeDirectorComponent,
  children: [
  {
    path:'refereeUserList', component: RefereeUserListComponent
  },
  {
    path:'addReferee', component: AddRefereeComponent
  },
  {
    path:'refereeNewApplicationList', component: RefereeNewApplicationListComponent
  },
  {
    path:'viewMatches', component: ViewMatches
  }
  ]

},
{
  path:'F.A.Q.', component:FAQPageComponent
},
{
  path:'teamApplication', component:TeamApplicationComponent
},
{
 path:'refereeLoginOrRegister', component:LoginOrRegisterComponent
},
{
 path:'registerReferee', component:RegisterRefereeComponent
},
{
 path:'teamLoginOrRegister', component:TeamLoginOrRegisterComponent
},
{
   path:'searchMatchSchedule', component:SearchMatchScheduleComponent
 },
 {
   path:'teamDirectorDashboard', component:TeamDirectorComponent,
   children: [
   {
    path:'teamsList', component: TeamsListComponent
  },
  {
    path:'teamNewApplicationList', component: TeamNewApplicationListComponent
  }
   ]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RefereeDirectorComponent, 
UserListComponent, LoginPageComponent,
AddRefereeComponent,RefereeUserListComponent, 
RefereeNewApplicationListComponent,TournamentDirectorLoginPageComponent,
TournamentDirectorDashboardComponent,AddTournamentComponent,TournamentListComponent,
TeamsDashboardComponent, FAQPageComponent, TeamApplicationComponent, 
LoginOrRegisterComponent,RegisterRefereeComponent, TeamLoginOrRegisterComponent, 
SearchMatchScheduleComponent,TeamDirectorComponent, TeamsListComponent, TeamNewApplicationListComponent]

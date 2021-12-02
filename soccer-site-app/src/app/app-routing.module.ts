import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';

import { UserListComponent } from './userList/userList.component';

//App Component
import { AppComponent } from './app.component';

//Admin Login Component
import { AllDirectorLoginPageComponent } from './admin2/loginPage/loginPage.component';

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
import { RefereeDashboardComponent } from './referee/dashboard/refereeHomepage.component';


// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournamentList/tournamentList.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';
import { TournamentFee } from 'src/models/tournamentFee';
import { tournamentFee } from './tournamentDirector/tournamentFee/tournamentFee';

//Team Director
import { TeamDirectorComponent } from './teamDirector/dashboard/teamDirectorDashboard.component';
import { TeamsListComponent } from './teamDirector/teamsList/teamsList.component';
import { TeamNewApplicationListComponent } from './teamDirector/teamNewApplicationList/teamNewApplicationList.component';
import { ScheduleMatchesComponent } from './teamDirector/scheduleMatches/scheduleMatches.component';
import { ViewMatchesComponent } from './teamDirector/viewMatchList/viewMatchList.component';

//sponsors
import { sponsors } from './sponsors/sponsors';


// Volunteer Director
import { VolunteerDirectorComponent } from './volunteerDirector/dashboard/volunteerDirectorHomepage.component';
import { VolunteerUserListComponent } from './volunteerDirector/volunteerUserList/volunteerUserList.component';
import { VolunteerNewApplicationListComponent } from './volunteerDirector/volunteerNewApplicationList/volunteerNewApplicationList.component';
import { AddVolunteerComponent } from './volunteerDirector/addVolunteer/addVolunteer.component';
//import { VolunteerDirectorComponent } from './volunteerDirector/dashboard/volunteerDirectorHomepage.component';
//import { ViewMatchesComponent } from './volunteerDirector/viewMatches/viewMatches';
import { VolunteerDirectorLoginPageComponent } from './volunteerDirector/loginpage/loginPage.component';

//Volunteers
import { VolunteerDirectorLoginOrRegisterComponent } from './volunteerDirector/loginOrRegister/loginOrRegister.component';
import { RegisterVolunteerComponent } from './volunteerDirector/register/registerVolunteer.component';


//home
import { Mainpage } from './mainpage/mainpage';

//F.A.Q. 
import { FAQPageComponent } from './faqpage/faqpage.component';

//Team Application
import { TeamApplicationComponent } from './teamApplication/teamApplication/teamApplication.component';
import { TeamLoginOrRegisterComponent } from './teamApplication/loginOrRegister/loginOrRegister.component';

//Teams, Schedules, Scores
import { SearchMatchScheduleComponent } from './matchSchedules/searchMatchSchedule/searchMatchSchedule.component';
import { SearchResultsComponent } from './matchSchedules/searchResults/searchResults.component';


// Hotels
import { HotelsComponent } from './hotels/hotels.component';


const routes: Routes = [
  {
  path:'app-root', component: AppComponent,
},
{
  path:'homepage', component:Mainpage,
},
  
{
  path:'app-hotels', component:HotelsComponent,
},
  
  {
   path:'teamApplication', component:TeamApplicationComponent,
 },
 {
   path:'refereeLoginOrRegister', component:LoginOrRegisterComponent
 },
 {
   path:'refereeHomepage', component:RefereeDashboardComponent
 },
 {
  path:'volunteerLoginOrRegister', component:VolunteerDirectorLoginOrRegisterComponent
},
 {
   path:'searchMatchSchedule', component:SearchMatchScheduleComponent
 },
 
  {
    path:'home', component: Mainpage
  },

 {
   path:'allDirectorLoginPage', component:AllDirectorLoginPageComponent
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
    },
    {
      path:'tournamentFee', component: tournamentFee
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

{path:'volunteerDirectorHomepage', component: VolunteerDirectorComponent,
  children: [
  {
    path:'volunteerUserList', component: VolunteerUserListComponent
  },
  {
    path:'addVolunteer', component: AddVolunteerComponent
  },
  {
    path:'volunteerNewApplicationList', component: VolunteerNewApplicationListComponent
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
  path:'sponsors', component:sponsors
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

  path:'registerVolunteer', component:RegisterVolunteerComponent
 },
{
 path:'volunteerLoginOrRegister', component:VolunteerDirectorLoginOrRegisterComponent
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
  },
  {
    path:'scheduleMatches', component: ScheduleMatchesComponent
  },
  {
    path:'viewMatchList', component: ViewMatchesComponent
  }
   ]
 },
 {
   path:'searchMatchesResults', component:SearchResultsComponent
 },
 {
  path:'', component: Mainpage
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [RefereeDirectorComponent, VolunteerDirectorComponent, 
UserListComponent, LoginPageComponent, VolunteerDirectorLoginPageComponent, 
AddRefereeComponent,RefereeUserListComponent, AddVolunteerComponent, VolunteerUserListComponent, 
RefereeNewApplicationListComponent,TournamentDirectorLoginPageComponent, VolunteerNewApplicationListComponent, 
TournamentDirectorDashboardComponent,AddTournamentComponent,TournamentListComponent,tournamentFee,
TeamsDashboardComponent, FAQPageComponent, TeamApplicationComponent, RegisterVolunteerComponent, 
LoginOrRegisterComponent,RegisterRefereeComponent, TeamLoginOrRegisterComponent, VolunteerDirectorLoginOrRegisterComponent, 
SearchMatchScheduleComponent,TeamDirectorComponent, TeamsListComponent, TeamNewApplicationListComponent,
AllDirectorLoginPageComponent,sponsors, SearchResultsComponent,ScheduleMatchesComponent,ViewMatchesComponent,Mainpage,
RefereeDashboardComponent]

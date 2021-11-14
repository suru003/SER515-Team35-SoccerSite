import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';

import { UserListComponent } from './user-list/user-list.component';


// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/dashboard/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './refereeDirector/referee-user-list/referee-user-list.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/referee-new-application-list/referee-new-application-list.component';
import { AddRefereeComponent } from './refereeDirector/addReferee/addReferee.component';
import { LoginPageComponent } from './refereeDirector/loginPage/loginPage.component';

// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournament-list/tournament-list.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';

<<<<<<< Updated upstream


const routes: Routes = [
{path:'app-coach', component: CoachComponent},
=======
//Team Director
import { TeamDirectorComponent } from './teamDirector/dashboard/teamDirectorDashboard.component';
import { TeamsListComponent } from './teamDirector/teamsList/teamsList.component';
import { TeamNewApplicationListComponent } from './teamDirector/teamNewApplicationList/teamNewApplicationList.component';

<<<<<<< Updated upstream
//sponsors
import { sponsors } from './sponsors/sponsors';
=======
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
>>>>>>> Stashed changes

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
  path:'volunteerLoginOrRegister', component:VolunteerDirectorLoginOrRegisterComponent
},
 {
   path:'searchMatchSchedule', component:SearchMatchScheduleComponent
 },
 ]
},
  {
    path:'home', component: AppComponent
  },

 {
   path:'allDirectorLoginPage', component:AllDirectorLoginPageComponent
 },
 {path:'app-coach', component: CoachComponent},
>>>>>>> Stashed changes
  // {path:'app-homepage', component: HomepageComponent},
  {path:'admin-home', children:[
  { path:'', component: AdminHomeComponent },
      // { path:'admin-header', component: HeaderComponent },
      // { path:'admin-footer', component: FooterComponent },
      // { path:'admin-sidebar', component: SidebarComponent }
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
          path:'tournament-list', component: TournamentListComponent
        }
      ]
  },
  {
    path:'teamsDashboard', component: TeamsDashboardComponent
  },
  {path:'refereeDirectorHomepage', component: RefereeDirectorComponent,
<<<<<<< Updated upstream
        children: [
        {
          path:'referee-user-list', component: RefereeUserListComponent
        },
        {
          path:'add-referee', component: AddRefereeComponent
        },
        {
          path:'referee-new-application-list', component: RefereeNewApplicationListComponent
        }
      ]

}
  // {path:'', component:HomepageComponent}
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
  TeamsDashboardComponent]
=======
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
  }
   ]
 },

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
TournamentDirectorDashboardComponent,AddTournamentComponent,TournamentListComponent,
<<<<<<< Updated upstream
TeamsDashboardComponent, FAQPageComponent, TeamApplicationComponent, 
LoginOrRegisterComponent,RegisterRefereeComponent, TeamLoginOrRegisterComponent, 
SearchMatchScheduleComponent,TeamDirectorComponent, TeamsListComponent, TeamNewApplicationListComponent,
AllDirectorLoginPageComponent,sponsors]
=======
TeamsDashboardComponent, FAQPageComponent, TeamApplicationComponent, RegisterVolunteerComponent, 
LoginOrRegisterComponent,RegisterRefereeComponent, TeamLoginOrRegisterComponent, VolunteerDirectorLoginOrRegisterComponent, 
SearchMatchScheduleComponent,TeamDirectorComponent, TeamsListComponent, TeamNewApplicationListComponent]
>>>>>>> Stashed changes
>>>>>>> Stashed changes

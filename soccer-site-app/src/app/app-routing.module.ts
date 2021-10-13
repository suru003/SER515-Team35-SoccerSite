import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';

import { UserListComponent } from './user-list/user-list.component';
import { AddRefereeComponent } from './addReferee/addReferee.component';
import { LoginPageComponent } from './loginPage/loginPage.component';

// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './referee-user-list/referee-user-list.component';
import { RefereeNewApplicationListComponent } from './referee-new-application-list/referee-new-application-list.component';

// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournament-list/tournament-list.component';



const routes: Routes = [
{path:'app-coach', component: CoachComponent},
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
  {path:'refereeDirectorHomepage', component: RefereeDirectorComponent,
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
  TournamentDirectorDashboardComponent,AddTournamentComponent,TournamentListComponent]

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { CoachService } from './services/coach.service';
import { AdminModule } from './admin/admin.module';

//Admin Login Component
import { AllDirectorLoginPageComponent } from './admin2/loginPage/loginPage.component';

// services
import { Admin2Service } from './services/admin2.service';
import { RefereeDirectorService } from './services/refereeDirector.service';
import { VolunteerDirectorService } from './services/volunteerDirector.service';
import { TournamentDirectorService } from './services/tournamentDirector.service';
import { SharedService } from './services/shared.service';

// components
import { UserListComponent } from './userList/userList.component';
import { AddRefereeComponent } from './refereeDirector/addReferee/addReferee.component';
import { LoginPageComponent } from './refereeDirector/loginPage/loginPage.component';

import { AddVolunteerComponent } from './volunteerDirector/addVolunteer/addVolunteer.component';
import { VolunteerDirectorLoginPageComponent } from './volunteerDirector/loginpage/loginPage.component';

// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/dashboard/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './refereeDirector/refereeUserList/refereeUserList.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/refereeNewApplicationList/refereeNewApplicationList.component';


import { VolunteerDirectorComponent } from './volunteerDirector/dashboard/volunteerDirectorHomepage.component';
import { VolunteerUserListComponent } from './volunteerDirector/volunteerUserList/volunteerUserList.component';
import { VolunteerNewApplicationListComponent } from './volunteerDirector/volunteerNewApplicationList/volunteerNewApplicationList.component';

// Referee
//Referees
import { LoginOrRegisterComponent } from './refereeDirector/loginOrRegister/loginOrRegister.component';
import { RegisterRefereeComponent } from './refereeDirector/register/registerReferee.component';
import { RefereeDashboardComponent } from './referee/dashboard/refereeHomepage.component';



import { VolunteerDirectorLoginOrRegisterComponent } from './volunteerDirector/loginOrRegister/loginOrRegister.component';
import { RegisterVolunteerComponent } from './volunteerDirector/register/registerVolunteer.component';



// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournamentList/tournamentList.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';

import { tournamentFee } from './tournamentDirector/tournamentFee/tournamentFee';


//Team Director
import { TeamDirectorComponent } from './teamDirector/dashboard/teamDirectorDashboard.component';
import { TeamsListComponent } from './teamDirector/teamsList/teamsList.component';
import { TeamNewApplicationListComponent } from './teamDirector/teamNewApplicationList/teamNewApplicationList.component';
import { ScheduleMatchesComponent } from './teamDirector/scheduleMatches/scheduleMatches.component';
import { ViewMatchesComponent } from './teamDirector/viewMatchList/viewMatchList.component';

//sponsors
import { sponsors } from './sponsors/sponsors';

//home
import { Mainpage } from './mainpage/mainpage';

//F.A.Q. 
import { FAQPageComponent } from './faqpage/faqpage.component';
import {MatExpansionModule} from '@angular/material/expansion';


//Team Application
import { TeamApplicationComponent } from './teamApplication/teamApplication/teamApplication.component';

import { TeamLoginOrRegisterComponent } from './teamApplication/loginOrRegister/loginOrRegister.component';
import { ViewMatches } from './refereeDirector/viewMatches/viewMatches';


//Teams, Schedules, Scores
import { SearchMatchScheduleComponent } from './matchSchedules/searchMatchSchedule/searchMatchSchedule.component';
import { HotelsComponent } from './hotels/hotels.component';





@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    UserListComponent,
    AddRefereeComponent, 
    AddVolunteerComponent, 
    LoginPageComponent, 
    VolunteerDirectorLoginPageComponent, 
    RefereeDirectorComponent, 
    VolunteerDirectorComponent, 
    RefereeUserListComponent, 
    VolunteerUserListComponent, 
    RefereeNewApplicationListComponent, 
    VolunteerNewApplicationListComponent,  
    TournamentDirectorLoginPageComponent,
    TournamentDirectorDashboardComponent,
    AddTournamentComponent,
    tournamentFee,
    TournamentListComponent,
    TeamsDashboardComponent,
    FAQPageComponent,
    Mainpage,
    RefereeDashboardComponent,
    sponsors,
    ScheduleMatchesComponent,
    TeamApplicationComponent, 
    VolunteerDirectorLoginOrRegisterComponent, 
    ViewMatchesComponent,
    LoginOrRegisterComponent,
    RegisterRefereeComponent, 
    RegisterVolunteerComponent, 

    TeamLoginOrRegisterComponent,
    SearchMatchScheduleComponent,
    TeamDirectorComponent,
    TeamsListComponent,
    TeamNewApplicationListComponent,
    ViewMatches,
    AllDirectorLoginPageComponent,
    HotelsComponent
  ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        BrowserAnimationsModule,
        NgbModule,
        MatExpansionModule
    ],

  providers: [CoachService, Admin2Service, RefereeDirectorService, TournamentDirectorService, VolunteerDirectorService, SharedService],

  bootstrap: [AppComponent]
})
export class AppModule { }

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

// services
import { Admin2Service } from './services/admin2.service';
import { RefereeDirectorService } from './services/refereeDirector.service';
import { VolunteerDirectorService } from './services/volunteerDirector.service';
import { TournamentDirectorService } from './services/tournamentDirector.service';
import { SharedService } from './services/shared.service';

// components
import { UserListComponent } from './user-list/user-list.component';
import { AddRefereeComponent } from './refereeDirector/addReferee/addReferee.component';
import { LoginPageComponent } from './refereeDirector/loginPage/loginPage.component';

import { AddVolunteerComponent } from './volunteerDirector/addVolunteer/addVolunteer.component';
import { VolunteerDirectorLoginPageComponent } from './volunteerDirector/loginpage/loginPage.component';

// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/dashboard/refereeDirectorHomepage.component';
<<<<<<< Updated upstream
import { RefereeUserListComponent } from './refereeDirector/referee-user-list/referee-user-list.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/referee-new-application-list/referee-new-application-list.component';
=======
import { RefereeUserListComponent } from './refereeDirector/refereeUserList/refereeUserList.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/refereeNewApplicationList/refereeNewApplicationList.component';

import { VolunteerDirectorComponent } from './volunteerDirector/dashboard/volunteerDirectorHomepage.component';
import { VolunteerUserListComponent } from './volunteerDirector/volunteerUserList/volunteerUserList.component';
import { VolunteerNewApplicationListComponent } from './volunteerDirector/volunteerNewApplicationList/volunteerNewApplicationList.component';

// Referee
//Referees
import { LoginOrRegisterComponent } from './refereeDirector/loginOrRegister/loginOrRegister.component';
import { RegisterRefereeComponent } from './refereeDirector/register/registerReferee.component';

import { VolunteerDirectorLoginOrRegisterComponent } from './volunteerDirector/loginOrRegister/loginOrRegister.component';
import { RegisterVolunteerComponent } from './volunteerDirector/register/registerVolunteer.component';

>>>>>>> Stashed changes

// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournament-list/tournament-list.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';






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
    TournamentListComponent,
<<<<<<< Updated upstream
    TeamsDashboardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [CoachService, Admin2Service, RefereeDirectorService, TournamentDirectorService, SharedService],
=======
    TeamsDashboardComponent,
    FAQPageComponent,
    sponsors,
    TeamApplicationComponent,
    VolunteerDirectorLoginOrRegisterComponent, 
    LoginOrRegisterComponent,
    RegisterRefereeComponent,
    RegisterVolunteerComponent, 
    TeamLoginOrRegisterComponent,
    SearchMatchScheduleComponent,
    TeamDirectorComponent,
    TeamsListComponent,
    TeamNewApplicationListComponent,
    ViewMatches,
    AllDirectorLoginPageComponent
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
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }

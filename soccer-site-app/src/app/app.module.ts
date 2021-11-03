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
import { TournamentDirectorService } from './services/tournamentDirector.service';
import { SharedService } from './services/shared.service';

// components
import { UserListComponent } from './userList/userList.component';
import { AddRefereeComponent } from './refereeDirector/addReferee/addReferee.component';
import { LoginPageComponent } from './refereeDirector/loginPage/loginPage.component';

// Referee Director
import { RefereeDirectorComponent } from './refereeDirector/dashboard/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './refereeDirector/refereeUserList/refereeUserList.component';
import { RefereeNewApplicationListComponent } from './refereeDirector/refereeNewApplicationList/refereeNewApplicationList.component';

// Tournament Director
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';
import { AddTournamentComponent } from './tournamentDirector/addTournament/addTournament.component';
import { TournamentListComponent } from './tournamentDirector/tournamentList/tournamentList.component';
import { TeamsDashboardComponent } from './tournamentDirector/teams/teamsDashboard.component';

//F.A.Q. 
import { FAQPageComponent } from './faqpage/faqpage.component';






@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    UserListComponent,
    AddRefereeComponent,
    LoginPageComponent,
    RefereeDirectorComponent,
    RefereeUserListComponent,
    RefereeNewApplicationListComponent,
    TournamentDirectorLoginPageComponent,
    TournamentDirectorDashboardComponent,
    AddTournamentComponent,
    TournamentListComponent,
    TeamsDashboardComponent,
    FAQPageComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }

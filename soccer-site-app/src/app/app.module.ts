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
// import { HomepageComponent } from './homepage/homepage.component';
import { AdminModule } from './admin/admin.module';

// services
import { Admin2Service } from './services/admin2.service';
import { RefereeDirectorService } from './services/refereeDirector.service';

// components
import { UserListComponent } from './user-list/user-list.component';
import { AddRefereeComponent } from './addReferee/addReferee.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { RefereeDirectorComponent } from './refereeDirector/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './referee-user-list/referee-user-list.component';
import { RefereeNewApplicationListComponent } from './referee-new-application-list/referee-new-application-list.component';
import { TournamentDirectorLoginPageComponent } from './tournamentDirector/loginPage/loginPage.component';
import { TournamentDirectorDashboardComponent } from './tournamentDirector/dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    // HomepageComponent,
    UserListComponent,
    AddRefereeComponent,
    LoginPageComponent,
    RefereeDirectorComponent,
    RefereeUserListComponent,
    RefereeNewApplicationListComponent,
    TournamentDirectorLoginPageComponent,
    TournamentDirectorDashboardComponent
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
  providers: [CoachService, Admin2Service, RefereeDirectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

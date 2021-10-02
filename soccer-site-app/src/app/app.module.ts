import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { CoachService } from './services/coach.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    HomepageComponent
  ], 
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [CoachService],
  bootstrap: [AppComponent]
})
export class AppModule { }

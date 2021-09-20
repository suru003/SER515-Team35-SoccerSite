import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { CoachService } from './services/coach.service';

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoachService],
  bootstrap: [AppComponent]
})
export class AppModule { }

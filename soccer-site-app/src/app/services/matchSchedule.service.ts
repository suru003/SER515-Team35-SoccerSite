import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Team } from 'src/models/team';
import { Category } from 'src/models/category';
import { MatchesSchedule } from 'src/models/matchesSchedule';

@Injectable({
  providedIn: 'root'
})
export class MatchScheduleService {
  private serverUrl = `${environment.apiBaseUrl}/matchesSchedule`;
  // private catUrl = `${environment.apiBaseUrl}/category`;
  constructor(private http: HttpClient) { }

  public getMatchesSchedule(id: String):Observable<MatchesSchedule>{
    return this.http.get<MatchesSchedule>(`${this.serverUrl}/find/${id}`);
  }

  public getMatchesScheduleByDivision(categoryName: String):Observable<MatchesSchedule[]>{
    console.log(categoryName);
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByDivision/${categoryName}`);
  }

  public getMatchesScheduleByTeam(id: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByTeam/${id}`);
  }

  public getMatchesScheduleByDate(date: String):Observable<MatchesSchedule[]>{
    console.log(date);
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByDate/${date}`);
  }

  public getMatchesScheduleByVenue(venue: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByVenue/${venue}`);
  }

  // public getAcceptedTeam(categoryName: String):Observable<Team[]>{
  //   return this.http.get<Team[]>(`${this.serverUrl}/find/acceptedTeams/${categoryName}`);
  // }
  
  // public getAllTeams():Observable<Team[]>{
  //   return this.http.get<Team[]>(`${this.serverUrl}/all`);
  // }
  
  public addMatchesSchedule(schedule: MatchesSchedule):Observable<MatchesSchedule>{
    // console.log("team "+JSON.stringify(team));
    return this.http.post<MatchesSchedule>(`${this.serverUrl}/insert`,schedule);
  }

  public updateSchedule(schedule: MatchesSchedule):Observable<MatchesSchedule>{
    return this.http.put<MatchesSchedule>(`${this.serverUrl}/update`,schedule);
  }
  
  public deleteSchedule(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

  // public findByisVerifiedTrue():Observable<Team[]>{
  //   return this.http.get<Team[]>(`${this.serverUrl}/status/true`);
  // }

  // public findByisVerifiedFalse():Observable<Team[]>{
  //   return this.http.get<Team[]>(`${this.serverUrl}/status/false`);
  // }

  // public findAllDivisions():Observable<Category[]>{
  //   return this.http.get<Category[]>(`${this.catUrl}/all`);
  // }

}

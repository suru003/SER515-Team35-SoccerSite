import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

import { Team } from 'src/models/team';
import { Category } from 'src/models/category';
import { MatchesSchedule } from 'src/models/matchesSchedule';
import { Field } from 'src/models/field';

@Injectable({
  providedIn: 'root'
})
export class MatchScheduleService {
  private serverUrl = `${environment.apiBaseUrl}/matchesSchedule`;
  private fieldUrl = `${environment.apiBaseUrl}/fields`;
  private catUrl = `${environment.apiBaseUrl}/category`;
  // private catUrl = `${environment.apiBaseUrl}/category`;

  constructor(private http: HttpClient) { }

  public getScheduleById(id: String):Observable<MatchesSchedule>{
    return this.http.get<MatchesSchedule>(`${this.serverUrl}/find/${id}`);
  }

  public getMatchesScheduleByDivision(categoryName: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByDivision/${categoryName}`);
  }

  public getMatchesScheduleByDivisionId(id: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByDivisionId/${id}`);
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

  public getMatchesScheduleByTime(time: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByTime/${time}`);
  }

  public getMatchesScheduleByReferee(id: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByReferee/${id}`);
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

  public getMatchesScheduleByFieldId(id: String):Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.serverUrl}/findByFieldId/${id}`);
  }
  
  public deleteSchedule(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

  public updateField(field: Field):Observable<Field>{
    return this.http.put<Field>(`${this.fieldUrl}/update`,field);
  }

  public getAllFields():Observable<Field[]>{
    return this.http.get<Field[]>(`${this.fieldUrl}/all`);
  } 

  public findAllDivisions():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.catUrl}/all`);
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

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
export class TeamService {
  private serverUrl = `${environment.apiBaseUrl}/team`;
  private catUrl = `${environment.apiBaseUrl}/category`;
  private matchesUrl = `${environment.apiBaseUrl}/matchesSchedule`;
  

  constructor(private http: HttpClient) { }

  public getTeam(id: String):Observable<Team>{
    return this.http.get<Team>(`${this.serverUrl}/find/${id}`);
  }

  public getAcceptedTeam(categoryName: String):Observable<Team[]>{
    return this.http.get<Team[]>(`${this.serverUrl}/find/acceptedTeams/${categoryName}`);
  }
  
  public getAllTeams():Observable<Team[]>{
    return this.http.get<Team[]>(`${this.serverUrl}/all`);
  }
  
  public addTeam(team: Team):Observable<Team>{
    console.log("team "+JSON.stringify(team));
    return this.http.post<Team>(`${this.serverUrl}/insert`,team);
  }

  public updateTeam(team: Team):Observable<Team>{
    return this.http.put<Team>(`${this.serverUrl}/update`,team);
  }
  
  public deleteTeam(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

  public findByisVerifiedTrue():Observable<Team[]>{
    return this.http.get<Team[]>(`${this.serverUrl}/status/true`);
  }

  public findByisVerifiedFalse():Observable<Team[]>{
    return this.http.get<Team[]>(`${this.serverUrl}/status/false`);
  }

  public findAllDivisions():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.catUrl}/all`);
  }

  public findDivisionByName(divisionName: String):Observable<Category>{
    return this.http.get<Category>(`${this.catUrl}/all`);
  }

  public findByDivision(division: String):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.serverUrl}/find/division/${division}`);
  }

  public getAllMatches():Observable<MatchesSchedule[]>{
    return this.http.get<MatchesSchedule[]>(`${this.matchesUrl}/all`);
  }


}

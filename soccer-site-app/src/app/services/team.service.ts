import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Team } from 'src/models/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private serverUrl = `${environment.apiBaseUrl}/team`;
  constructor(private http: HttpClient) { }

  public getTeam(id: String):Observable<Team>{
    return this.http.get<Team>(`${this.serverUrl}/find/${id}`);
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

}

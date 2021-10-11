import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tournament } from '../../models/tournament';
import { TournamentDirector } from '../../models/tournamentDirector';
import { Category } from '../../models/category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class TournamentDirectorService {
  private serverUrl = `${environment.apiBaseUrl}/tournament`;
  private categoryUrl = `${environment.apiBaseUrl}/category`;
  private managerUrl = `${environment.apiBaseUrl}/tournamentManager`;

  constructor(private http: HttpClient) {

  }


// Tournaments
public findAllTournaments(): Observable<Tournament[]> {
  return this.http.get<Tournament[]>(`${this.serverUrl}/all`);
} 

public createTournament(tournament: Tournament, manager_id: string) {
  const params = new HttpParams()
      .append('manager_id', manager_id);
  return this.http.post<Tournament>(`${this.serverUrl}/insert`, tournament,{
        params: params,
      });
}


public findTournamentByID(id: String): Observable<Tournament> {
  return this.http.get<Tournament>(`${this.serverUrl}/find/${id}`);
}

public deleteTournament(id: String):Observable<void>{
  return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
}

public updateTournament(tournament: Tournament):Observable<Tournament>{
  return this.http.put<Tournament>(`${this.serverUrl}/update`,tournament);
}

// Category
public findAllCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(`${this.categoryUrl}/all`);
} 

// tournament manager
public findTournamentDirectorByID(id: String): Observable<TournamentDirector> {
  return this.http.get<TournamentDirector>(`${this.managerUrl}/find/${id}`);
}
 
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament } from '../../models/tournament';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class TournamentDirectorService {
  private serverUrl = `${environment.apiBaseUrl}/tournament`;


  constructor(private http: HttpClient) {

  }


// Referees
public findAllTournaments(): Observable<Tournament[]> {
  return this.http.get<Tournament[]>(`${this.serverUrl}/all`);
} 

public createTournament(tournament: Tournament) {
  return this.http.post<Tournament>(`${this.serverUrl}/insert`, tournament);
}


// public findRefereeByID(id: String): Observable<Referee[]> {
//   return this.http.get<Referee[]>(`${this.serverUrl}/find/${id}`);
// }

public findTournamentByID(id: String): Observable<Tournament> {
  return this.http.get<Tournament>(`${this.serverUrl}/find/${id}`);
}

public deleteTournament(id: String):Observable<void>{
  return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
}

public updateTournament(tournament: Tournament):Observable<Tournament>{
  return this.http.put<Tournament>(`${this.serverUrl}/update`,tournament);
}


 // public findByStatus(status: String):Observable<Referee[]>{
 //    return this.http.get<Referee[]>(`${this.serverUrl}/status/${status}`);
 //  }
 
}
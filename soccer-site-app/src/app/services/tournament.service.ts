import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tournament } from 'src/models/tournament';
import { TournamentFee } from 'src/models/tournamentFee';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private serverUrl = `${environment.apiBaseUrl}/tournament`;
  constructor(private http: HttpClient) { }

  public getTournament(id: String):Promise<Tournament>{
    console.log("Tournament "+`${this.serverUrl}/find/${id}`);
    return this.http.get<Tournament>(`${this.serverUrl}/find/${id}`).toPromise();
  }
  
  public getAllTournaments():Observable<Tournament[]>{
    return this.http.get<Tournament[]>(`${this.serverUrl}/all`);
  }
  
  public addTournament(tournament: Tournament):Observable<Tournament>{
    return this.http.post<Tournament>(`${this.serverUrl}/insert`,tournament);
  }
  public findFees():Observable<TournamentFee[]>{
    return this.http.get<TournamentFee[]>(`${this.serverUrl}/all`);
  }

  public updateTournament(tournament: Tournament):Observable<Tournament>{
    return this.http.put<Tournament>(`${this.serverUrl}/update`,tournament);
  }
  
  public deleteTournament(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}

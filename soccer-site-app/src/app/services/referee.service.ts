import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Referee } from 'src/models/referee';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {
  private serverUrl = `${environment.apiBaseUrl}/referees`;

  constructor(private http: HttpClient) { }

  public getReferee(id: String):Observable<Referee>{
    return this.http.get<Referee>(`${this.serverUrl}/find/${id}`);
  }
  
  public getAllReferees():Observable<Referee[]>{
    return this.http.get<Referee[]>(`${this.serverUrl}/all`);
  }
  
  public addReferee(coach: Referee):Observable<Referee>{
    return this.http.post<Referee>(`${this.serverUrl}/insert`,coach);
  }

  public updateReferee(coach: Referee):Observable<Referee>{
    return this.http.put<Referee>(`${this.serverUrl}/insert`,coach);
  }
  
  public deleteReferee(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

  public findByStatus(status: String):Observable<Referee[]>{
    return this.http.get<Referee[]>(`${this.serverUrl}/status/${status}`);
  }
}

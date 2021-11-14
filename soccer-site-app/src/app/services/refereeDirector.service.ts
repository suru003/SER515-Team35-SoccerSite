import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin2 } from '../../models/admin2';
import { Referee } from '../../models/referee';
import { Users } from '../../models/users';
import { Roles } from '../../models/roles';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matches } from 'src/models/matches';


@Injectable()
export class RefereeDirectorService {
  private serverUrl = `${environment.apiBaseUrl}/referees`;
  private rolesUrl = `${environment.apiBaseUrl}/roles`;
  private matchesUrl = `${environment.apiBaseUrl}/matches`;


  constructor(private http: HttpClient) {

  }


// Referees
public findAllReferees(): Observable<Referee[]> {
  return this.http.get<Referee[]>(`${this.serverUrl}/all`);
} 



public createReferee(referee: Referee) {
  return this.http.post<Referee>(`${this.serverUrl}/insert`, referee);
}


// public findRefereeByID(id: String): Observable<Referee[]> {
//   return this.http.get<Referee[]>(`${this.serverUrl}/find/${id}`);
// }

public findRefereeByID(id: String): Observable<Referee> {
  return this.http.get<Referee>(`${this.serverUrl}/find/${id}`);
}

public deleteReferee(id: String):Observable<void>{
  return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
}

public updateReferee(referee: Referee):Observable<Referee>{
  return this.http.put<Referee>(`${this.serverUrl}/update`,referee);
}


// Roles
public findAllRoles(): Observable<Roles[]> {
  return this.http.get<Roles[]>(`${this.rolesUrl}/all`);
}

 public findByStatus(status: String):Observable<Referee[]>{
    return this.http.get<Referee[]>(`${this.serverUrl}/status/${status}`);
  }

  // Matches
public findAllMatches(): Observable<Matches[]> {
  return this.http.get<Matches[]>(`${this.matchesUrl}/all`);
}
 
}
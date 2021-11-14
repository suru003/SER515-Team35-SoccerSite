import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin2 } from '../../models/admin2';
import { Volunteer } from '../../models/volunteer';
import { Users } from '../../models/users';
import { Roles } from '../../models/roles';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matches } from 'src/models/matches';


@Injectable()
export class VolunteerDirectorService {
  private serverUrl = `${environment.apiBaseUrl}/volunteers`;
  private rolesUrl = `${environment.apiBaseUrl}/roles`;
  private matchesUrl = `${environment.apiBaseUrl}/matches`;


  constructor(private http: HttpClient) {

  }


// Volunteers
public findAllVolunteers(): Observable<Volunteer[]> {
  return this.http.get<Volunteer[]>(`${this.serverUrl}/all`);
} 



public createVolunteer(volunteer: Volunteer) {
  return this.http.post<Volunteer>(`${this.serverUrl}/insert`, volunteer);
}


// public findVolunteerByID(id: String): Observable<Volunteer[]> {
//   return this.http.get<Volunteer[]>(`${this.serverUrl}/find/${id}`);
// }

public findVolunteerByID(id: String): Observable<Volunteer> {
  return this.http.get<Volunteer>(`${this.serverUrl}/find/${id}`);
}

public deleteVolunteer(id: String):Observable<void>{
  return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
}

public updateVolunteer(volunteer: Volunteer):Observable<Volunteer>{
  return this.http.put<Volunteer>(`${this.serverUrl}/update`,volunteer);
}


// Roles
public findAllRoles(): Observable<Roles[]> {
  return this.http.get<Roles[]>(`${this.rolesUrl}/all`);
}

 public findByStatus(status: String):Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(`${this.serverUrl}/status/${status}`);
  }

  // Matches
public findAllMatches(): Observable<Matches[]> {
  return this.http.get<Matches[]>(`${this.matchesUrl}/all`);
}
 
}
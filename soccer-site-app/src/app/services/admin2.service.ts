import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin2 } from '../../models/admin2';
import { Referee } from '../../models/referee';
import { Users } from '../../models/users';
import { Roles } from '../../models/roles';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class Admin2Service {
  private serverUrl = `${environment.apiBaseUrl}`;
  private adminUrl = `${environment.apiBaseUrl}/admin`;
  private refereeUrl = `${environment.apiBaseUrl}/referees`;
  private usersUrl = `${environment.apiBaseUrl}/users`;
  private rolesUrl = `${environment.apiBaseUrl}/roles`;


  constructor(private http: HttpClient) {

  }

  public findDirectorByID(id: String): Observable<Admin2[]> {
  return this.http.get<Admin2[]>(`${this.adminUrl}/find/${id}`);
}

// Admins
public findAll(): Observable<Admin2[]> {
  return this.http.get<Admin2[]>(`${this.adminUrl}/all`);
}

public createAdmin(admin: Admin2) {
  return this.http.post<Admin2>(`${this.adminUrl}/insert`, admin);
}
// Users


public findAllUsers(): Observable<Users[]> {
  return this.http.get<Users[]>(`${this.usersUrl}/all`);
}

public createUser(user: Users) {
  return this.http.post<Users>(`${this.usersUrl}/insert`, user);
}

// Referees
public findAllReferees(): Observable<Referee[]> {
  return this.http.get<Referee[]>(`${this.refereeUrl}/all`);
} 

public createReferee(referee: Referee) {
  return this.http.post<Referee>(`${this.refereeUrl}/insert`, referee);
}


public findRefereeByID(id: String): Observable<Referee[]> {
  return this.http.get<Referee[]>(`${this.refereeUrl}/find/${id}`);
}

public deleteReferee(id: String):Observable<void>{
  return this.http.delete<void>(`${this.refereeUrl}/delete/${id}`);
}

public updateReferee(referee: Referee):Observable<Referee>{
  return this.http.put<Referee>(`${this.refereeUrl}/update`,referee);
}


// Roles
public findAllRoles(): Observable<Roles[]> {
  return this.http.get<Roles[]>(`${this.rolesUrl}/all`);
}
 
}
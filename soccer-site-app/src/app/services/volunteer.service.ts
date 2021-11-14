import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Volunteer } from 'src/models/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private serverUrl = `${environment.apiBaseUrl}/volunteers`;

  constructor(private http: HttpClient) { }

  public getVolunteer(id: String):Observable<Volunteer>{
    return this.http.get<Volunteer>(`${this.serverUrl}/find/${id}`);
  }
  
  public getAllVolunteers():Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(`${this.serverUrl}/all`);
  }
  
  public addVolunteer(coach: Volunteer):Observable<Volunteer>{
    return this.http.post<Volunteer>(`${this.serverUrl}/insert`,coach);
  }

  public updateVolunteer(coach: Volunteer):Observable<Volunteer>{
    return this.http.put<Volunteer>(`${this.serverUrl}/insert`,coach);
  }
  
  public deleteVolunteer(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

  public findByStatus(status: String):Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(`${this.serverUrl}/status/${status}`);
  }
}

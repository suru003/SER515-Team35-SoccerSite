import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coach } from 'src/models/coach';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private serverUrl = `${environment.apiBaseUrl}/coaches`;
  constructor(private http: HttpClient) { }

  public getCoach(id: String):Promise<Coach>{
    return this.http.get<Coach>(`${this.serverUrl}/find/${id}`).toPromise();
  }
  
  public getAllCoaches():Observable<Coach[]>{
    return this.http.get<Coach[]>(`${this.serverUrl}/all`);
  }
  
  public addCoach(coach: Coach):Observable<Coach>{
    return this.http.post<Coach>(`${this.serverUrl}/insert`,coach);
  }

  public updateCoach(coach: Coach):Observable<Coach>{
    return this.http.put<Coach>(`${this.serverUrl}/update`,coach);
  }
  
  public deleteCoach(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}

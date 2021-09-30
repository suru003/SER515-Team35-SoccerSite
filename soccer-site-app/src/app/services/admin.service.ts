import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from 'src/models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private serverUrl = `${environment.apiBaseUrl}/admin`;
  constructor(private http: HttpClient) { }

  public getAdmin(id: String):Observable<Admin>{
    return this.http.get<Admin>(`${this.serverUrl}/find/${id}`);
  }
  
  public getAllAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.serverUrl}/all`);
  }
  
  public addAdmin(coach: Admin):Observable<Admin>{
    return this.http.post<Admin>(`${this.serverUrl}/insert`,coach);
  }

  public updateAdmin(coach: Admin):Observable<Admin>{
    return this.http.put<Admin>(`${this.serverUrl}/insert`,coach);
  }
  
  public deleteAdmin(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}

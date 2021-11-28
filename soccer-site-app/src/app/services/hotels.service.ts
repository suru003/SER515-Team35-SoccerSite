import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hotel } from 'src/models/hotel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private serverUrl = `${environment.apiBaseUrl}/hotels`;
  constructor(private http: HttpClient) { }

  public getHotel(id: String):Promise<Hotel>{
    return this.http.get<Hotel>(`${this.serverUrl}/find/${id}`).toPromise();
  }
  
  public getAllHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(`${this.serverUrl}/all`);
  }
  
  public addHotel(hotel: Hotel):Observable<Hotel>{
    return this.http.post<Hotel>(`${this.serverUrl}/insert`,hotel);
  }

  public updateHotel(hotel: Hotel):Observable<Hotel>{
    return this.http.put<Hotel>(`${this.serverUrl}/update`,hotel);
  }
  
  public deleteHotel(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}

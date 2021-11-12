import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private serverUrl = `${environment.apiBaseUrl}/category`;
  constructor(private http: HttpClient) { }

  public getCategory(id: String):Promise<Category>{
    return this.http.get<Category>(`${this.serverUrl}/find/${id}`).toPromise();
  }
  
  public getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.serverUrl}/all`);
  }
  
  public addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(`${this.serverUrl}/insert`,category);
  }

  public updateCategory(category: Category):Observable<Category>{
    return this.http.put<Category>(`${this.serverUrl}/update`,category);
  }
  
  public deleteCategory(id: String):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}

// src/app/pages/menu/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  // Fetch meals by name
  getMealsByName(searchTerm: string): Observable<any> {
    const url = `${this.apiUrl}${searchTerm}`;
    return this.http.get<any>(url);  // Return the response from API
  }
}


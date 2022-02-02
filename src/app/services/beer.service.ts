import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Beer[]>(`${environment.apiUrl}/beers`);
  }

  public findById(id: string) {
    return this.http.get<Beer>(`${environment.apiUrl}/beers/${id}`);
  }
}

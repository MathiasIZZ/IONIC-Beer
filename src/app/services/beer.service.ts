import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Beer[]>(`${environment.apiUrl}/beers`);
  }

  public findById(id: number) {
    return this.http.get<Beer>(`${environment.apiUrl}/beers/${id}`);
  }

  public stock(beer: Beer, q: number) {
    beer.quantity = beer.quantity + q;
    console.log(beer.quantity);
    return this.http.patch<Beer>(`${environment.apiUrl}/beers`, beer);
  }
}

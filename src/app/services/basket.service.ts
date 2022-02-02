import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Basket } from '../models/basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Basket[]>(`${environment.apiUrl}/beers`);
  }

  public findById(id: string) {
    return this.http.get<Basket>(`${environment.apiUrl}/beers/${id}`);
  }
}

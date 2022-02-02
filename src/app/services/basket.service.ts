import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Basket} from "../models/basket";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpClient) {}

  public getBasket() {
    return this.http.get<Basket>(`${environment.apiUrl}/basket`);
  }


}

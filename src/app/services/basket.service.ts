import {Injectable} from '@angular/core';
import {Beer} from "../models/beer";

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  basket: Beer[] = [];

  constructor() {}

  public findBasket() {
    return this.basket;
  }

  public addBeer(beer: Beer){
    this.basket.push(beer);
    console.log(beer)
    console.log(this.basket)
  }

}

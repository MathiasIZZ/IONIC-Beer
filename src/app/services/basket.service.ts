import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from './beer.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: Beer[] = [];
  beer: Beer;

  constructor(private beerService: BeerService) {}

  public findBasket() {
    return this.basket;
  }

  public addBeer(beer: Beer) {
    this.beerService.findById(beer.id).subscribe((data) => (this.beer = data));
    this.basket.push(beer);
    this.beerService.stock(beer, -1);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../models/beer';
import { BasketService } from '../services/basket.service';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
})
export class BeerDetailsComponent implements OnInit {
  beer: Beer;
  id: number;
  constructor(
    private beerService: BeerService,
    private activeRoute: ActivatedRoute,
    private basketService: BasketService
  ) {
    this.id = this.activeRoute.snapshot.params['id'];
  }

  addToBasket() {
    this.basketService.addBeer(this.beer);
  }
  initBeer() {
    this.beerService.findById(this.id).subscribe((data) => (this.beer = data));
  }
  ngOnInit() {
    this.initBeer();
  }
}

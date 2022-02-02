import { Component, OnInit } from '@angular/core';

import {BasketService} from '../services/basket.service';
import {Basket} from '../models/basket';

@Component({
  selector: 'app-basket-details',
  templateUrl: './basket-details.component.html',
  styleUrls: ['./basket-details.component.scss'],
})
export class BasketDetailsComponent implements OnInit {

  baskets: Basket[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.displayBasket();
  }

  displayBasket() {
    this.basketService.findAll().subscribe( (data) => {
      this.baskets = data;
      console.log(this.baskets);
    });
  }

  deleteBeerOfMyBasket(index: number) {
    this.baskets.splice(index);
  }



}

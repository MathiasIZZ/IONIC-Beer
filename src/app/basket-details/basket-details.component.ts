import {Component, OnInit} from '@angular/core';

import {BasketService} from '../services/basket.service';
import {Beer} from "../models/beer";

@Component({
  selector: 'app-basket-details',
  templateUrl: './basket-details.component.html',
  styleUrls: ['./basket-details.component.scss'],
})
export class BasketDetailsComponent implements OnInit {

  basket: Beer[];

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.displayBasket();
  }

  displayBasket() {
    this.basket = this.basketService.findBasket();
  }

  deleteBeerOfMyBasket(index: number) {
    this.basket.splice(index, 1);
  }


}

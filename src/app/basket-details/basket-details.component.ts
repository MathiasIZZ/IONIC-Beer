import { Component, OnInit } from '@angular/core';

import {BasketService} from '../services/basket.service';
import {Basket} from '../models/basket';

@Component({
  selector: 'app-basket-details',
  templateUrl: './basket-details.component.html',
  styleUrls: ['./basket-details.component.scss'],
})
export class BasketDetailsComponent implements OnInit {

  basket: Basket;

  constructor(private basketService: BasketService) { }

  ngOnInit() {}

  displayBasket() {
    this.basketService.getBasket().subscribe( data => this.basket = data);
  }



}

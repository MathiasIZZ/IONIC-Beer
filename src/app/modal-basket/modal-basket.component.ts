import { Component, OnInit } from '@angular/core';
import {Basket} from '../models/basket';

@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss'],
})
export class ModalBasketComponent implements OnInit {

  basket: Basket;

  constructor() { }

  ngOnInit() {}

}

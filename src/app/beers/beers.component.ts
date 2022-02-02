import {Component, OnInit} from '@angular/core';
import {BeerService} from "../services/beer.service";
import {Beer} from "../models/beer";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.findAll().subscribe(
      data => this.beers = data
    );
  }
}

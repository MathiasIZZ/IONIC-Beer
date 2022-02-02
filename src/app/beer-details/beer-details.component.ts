import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Beer } from '../models/beer';
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
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  initBeer() {
    this.beerService.findById(this.id).subscribe((data) => (this.beer = data));
  }
  ngOnInit() {
    this.initBeer();
    console.log(this.beer);
  }
}

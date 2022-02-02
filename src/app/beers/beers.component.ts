import {Component, OnInit} from '@angular/core';
import {BeerService} from '../services/beer.service';
import {Beer} from '../models/beer';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  url: string;



  constructor(private beerService: BeerService, private router: ActivatedRoute) {
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

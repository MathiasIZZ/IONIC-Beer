import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalBasketComponent } from './modal-basket/modal-basket.component';
import { BeersComponent } from './beers/beers.component';
import { BasketDetailsComponent } from './basket-details/basket-details.component';
import { Beer } from './models/beer';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import {IntroAppComponent} from './intro-app/intro-app.component';

const routes: Routes = [
  { path: '', component: IntroAppComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'beers/:id', component: BeerDetailsComponent },
  { path: 'basket-details', component: BasketDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

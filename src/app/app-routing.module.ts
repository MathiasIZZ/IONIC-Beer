import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalBasketComponent } from './modal-basket/modal-basket.component';
import { BeersComponent } from './beers/beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  { path: 'beers', component: BeersComponent },
  { path: 'beers/:id', component: BeerDetailsComponent },
  { path: 'basket', component: ModalBasketComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

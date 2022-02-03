import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BeersComponent } from './beers/beers.component';
import { BasketDetailsComponent } from './basket-details/basket-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import {ModalBasketComponent} from './modal-basket/modal-basket.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {IntroAppComponent} from './intro-app/intro-app.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BasketDetailsComponent,
    BeerDetailsComponent,
    ModalBasketComponent,
    HeaderComponent,
    FooterComponent,
    IntroAppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

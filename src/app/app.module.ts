import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MainComponent } from './components/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    SingleProductComponent,
    NavbarComponent,
    CarouselComponent,
    PaymentsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

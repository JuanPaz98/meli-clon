import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    SingleProductComponent,
    CarouselComponent,
    PaymentsComponent,
    MainComponent,
    ProductDetailComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    SwiperModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselPromotionsComponent } from './components/carousel-promotions/carousel-promotions.component';
import { CarouselProductsComponent } from './components/carousel-products/carousel-products.component';
import { SwiperModule } from 'swiper/angular';
import { SingleProductModule } from '../single-product/single-product.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    CarouselPromotionsComponent,
    CarouselProductsComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SingleProductModule, 
    AppRoutingModule
  ],
  exports: [
    CarouselPromotionsComponent,
    CarouselProductsComponent,
    SingleProductModule
  ]
})
export class CarouselModule { }

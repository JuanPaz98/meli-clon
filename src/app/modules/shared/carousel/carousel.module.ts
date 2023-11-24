import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselPromotionsComponent } from './components/carousel-promotions/carousel-promotions.component';
import { CarouselProductsComponent } from './components/carousel-products/carousel-products.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    CarouselPromotionsComponent,
    CarouselProductsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [
    CarouselPromotionsComponent,
    CarouselProductsComponent
  ]
})
export class CarouselModule { }

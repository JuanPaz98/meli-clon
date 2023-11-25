import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'carousel-promotions',
  templateUrl: './carousel-promotions.component.html',
  styleUrls: ['./carousel-promotions.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class CarouselPromotionsComponent {
  constructor(){}
}

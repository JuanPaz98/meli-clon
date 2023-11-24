import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class CarouselProductsComponent {
  constructor(){

  }
  ngOnInit(): void {}
}

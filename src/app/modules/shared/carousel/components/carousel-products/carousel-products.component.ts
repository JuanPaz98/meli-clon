import { Component, ViewEncapsulation } from "@angular/core";
import { Product } from "src/app/modules/core/interfaces/product";
import { ApiProductsService } from "src/app/modules/core/services/api-products.service";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class CarouselProductsComponent {
  constructor(private apiSvc: ApiProductsService) { }
 
  products: Product[] = [];
  response!: Response;
    
  getAllProducts(){
    this.apiSvc.getAllProducts().subscribe(data =>{
      return this.products = data.data
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/core/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/modules/core/services/api-products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;
  imageSelected: string = '';

  constructor(
    public route: ActivatedRoute, 
    private apiProductsService: ApiProductsService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiProductsService.getSingleProduct(id).subscribe(data => {
        this.product = data.data;
        this.imageSelected = data.data.productImages[0].urlImage;
      })
    })
  }

  onChangeImage(imageId?: string) {
    imageId ? this.imageSelected = imageId : '';
  }
}

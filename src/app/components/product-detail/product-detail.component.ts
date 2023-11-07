import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute,
              private apiProductsService: ApiProductsService) { }

  product: Product = {} as Product;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiProductsService.getSingleProduct(id).subscribe(data => {
        this.product = data.data;
      })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service'
import { SingleProductComponent } from '../single-product/single-product.component'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor( apiSvc: ApiProductsService) { }

  ngOnInit(): void {
  }
  product = SingleProductComponent
}

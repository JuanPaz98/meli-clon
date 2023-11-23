import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/core/interfaces/product';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
 
  @Input() product!: Product

  constructor() {  }

}

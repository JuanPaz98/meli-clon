import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  
  @Input() product: Product = {    
      id: 0, 
      title: '', 
      price: 0, 
      description: '', 
      category: '', 
      image: '', 
      rating: {
        rate: 0,
          count: 0
        }
  };
  constructor() {  }


  ngOnInit(): void {
  }

}

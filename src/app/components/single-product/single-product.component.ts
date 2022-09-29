import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiProductsService } from '../../services/api-products.service'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  
 /*  @Input() product: Product = {    
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
  }; */
  @Input() product = this.apiSvc.product

  constructor(public apiSvc: ApiProductsService) {  }
  getSingleProduct(id:number = this.product.id){
    this.apiSvc.getSingleProduct(id).subscribe(id =>{
      console.log(id)
      this.apiSvc.product = id;
    })
  }

  ngOnInit(): void {
  }

}

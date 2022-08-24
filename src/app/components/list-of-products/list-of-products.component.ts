import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product'
import { ApiProductsService }from '../../services/api-products.service'

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  constructor(private apiSvc: ApiProductsService) { }
/*   product: Product = {
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
    }
   */
  products: Product[] = [];
    
    getProducts(){
      this.apiSvc.getAllProducts().subscribe(data =>{
        return this.products = data
      })
    }
    mostrar(){
      return console.log(this.products)
    }

  ngOnInit(): void {
  }

}
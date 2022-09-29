import { Component, OnInit } from '@angular/core';
import { Product, ProductDTO } from '../../interfaces/product'
import { ApiProductsService }from '../../services/api-products.service'

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  constructor(private apiSvc: ApiProductsService) { }
 
  products: Product[] = [];
    
  getAllProducts(){
    this.apiSvc.getAllProducts().subscribe(data =>{
      return this.products = data
    })
  }
  mostrar(){
    return console.log(this.products)
  }

  addProduct(){
    const newProduct: ProductDTO = {
      title: 'chaqueta de cuero',
      price: 240000,
      description: 'Chaqueta de motociclista de cuero PU, Pura chimbita, a prueba de viento, tela sintetica, color negro, gris, marron. Una chimba de chaqueta practicamente. ', 
      category: 'mens clothing', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_958200-CBT49743820905_042022-O.webp', 
      rating: {
        rate:3.0,
        count: 200
      }
    }
    this.apiSvc.addProduct(newProduct).subscribe(product =>{
      this.products.push(product);
      console.log(product);
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

}

import { Injectable } from '@angular/core';
import { Product, ProductDTO } from '../interfaces/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  product: Product = {    
    id: 0, 
    title: 'titulo producto', 
    price: 0, 
    description: '', 
    category: '', 
    image: '', 
    rating: {
      rate: 0,
        count: 0
      }
  }

  constructor(private http: HttpClient) { }

  apiURL = 'https://fakestoreapi.com/products/';

  getAllProducts(){
    return this.http.get<Product[]>(this.apiURL)
  }

  getSingleProduct(id:number){
    return this.http.get<Product>(this.apiURL + id)
  }

  addProduct(product: ProductDTO): Observable<Product>{
    return this.http.post<Product>(this.apiURL, product)
  }
}

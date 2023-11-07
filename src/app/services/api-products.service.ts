import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http'
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  product: Product = { } as Product;

  constructor(private http: HttpClient) { }

  // apiURL = 'https://fakestoreapi.com/products/';
  apiURL = 'https://localhost:44355/api/Product/';

  getClients() {
    return this.http.get<Response>(this.apiURL);
  }

  getAllProducts(){
    return this.http.get<Response>(this.apiURL)
  }

  getSingleProduct(id:number){
    return this.http.get<Response>(this.apiURL + id)
  }

  // addProduct(product: ProductDTO): Observable<Product>{
  //   return this.http.post<Product>(this.apiURL, product)
  // }
}

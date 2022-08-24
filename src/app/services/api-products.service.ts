import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://fakestoreapi.com/products';

  getAllProducts(){
    return this.http.get<Product[]>(this.apiURL)
  }
}

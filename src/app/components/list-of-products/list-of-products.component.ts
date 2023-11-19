import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product'
import { ApiProductsService }from '../../services/api-products.service'
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  constructor(private apiSvc: ApiProductsService) { }
 
  products: Product[] = [];
  response!: Response;
    
  getAllProducts(){
    this.apiSvc.getAllProducts().subscribe(data =>{
      return this.products = data.data
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

}

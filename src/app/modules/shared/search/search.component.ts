import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiProductsService } from '../../core/services/api-products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'meli-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchTerm$ = new Subject<string>();
    productList: Product[] = [];
    listFiltered: Product[] = [];
    
    constructor(private apiProductService: ApiProductsService) {}

    ngOnInit() {
        this.getProductList();
        this.filterList()
    }

    getProductList() {
        this.apiProductService.getAllProducts().subscribe(data =>{
            return this.productList = data.data
          })
    }

    filterList(): void {
        this.searchTerm$.subscribe(term => {
          this.listFiltered = this.productList
            .filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) >= 0);
        });
      }

    updateSearchValue(event: Event): void {
      const eventValue = (event.target as HTMLInputElement).value;
      this.searchTerm$.next(eventValue);
    }

}

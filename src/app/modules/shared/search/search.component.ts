import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiProductsService } from '../../core/services/api-products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'meli-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('resultsContainerElement') resultsContainer?: ElementRef;

  searchTerm$ = new Subject<string>();
  productList: Product[] = [];
  listFiltered: Product[] = [];
  isResultsContainerActive = false;

  constructor(
    private apiProductService: ApiProductsService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.getProductList();
    this.filterList();
    this.resultContainerClickOutside();
  }

  getProductList() {
    this.apiProductService.getAllProducts().subscribe(data => {
      return this.productList = data.data
    })
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      this.listFiltered = this.productList
        .filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) >= 0);
        this.isResultsContainerActive = true;
    });
  }

  updateSearchValue(event: Event): void {
    const eventValue = (event.target as HTMLInputElement).value;
    this.searchTerm$.next(eventValue);
  }

  protected resultContainerClickOutside() {
    document.addEventListener('click', (event) => {
      if (this.isResultsContainerActive) {
        const target = event.target as HTMLElement;
        if (this.resultsContainer && !this.resultsContainer.nativeElement.contains(target)) {
          this.renderer.removeClass(this.resultsContainer.nativeElement, 'results-container--active');
          this.isResultsContainerActive = false;
        }
      }
    })
  }

}

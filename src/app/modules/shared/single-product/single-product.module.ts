import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';

@NgModule({
  declarations: [
    SingleProductComponent,
  ],
  imports: [CommonModule],
  exports: [
    SingleProductComponent
  ],
})
export class SingleProductModule { }

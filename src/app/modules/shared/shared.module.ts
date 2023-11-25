import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarModule } from './navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './carousel/carousel.module';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductModule } from './single-product/single-product.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    NavbarModule,
    AuthenticationModule,
    CarouselModule,
  ],
  exports: [
    NavbarModule,
    AuthenticationModule,
    CarouselModule,
  ],
})
export class SharedModule { }

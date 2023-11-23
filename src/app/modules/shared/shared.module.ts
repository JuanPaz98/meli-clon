import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarModule } from './navbar/navbar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AuthenticationModule
  ],
  exports: [
    NavbarModule,
    AuthenticationModule
  ],
})
export class SharedModule { }

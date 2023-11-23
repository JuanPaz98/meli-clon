import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MeliFormComponent } from '../form/form.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    MeliFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginModule
  ],
  exports: []
})
export class AuthenticationModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from 'src/app/modules/shared/authentication/components/login/login.component';
import { RegistrationComponent } from 'src/app/modules/shared/authentication/components/registration/registration.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'Product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'Product/:id', component: ProductDetailComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

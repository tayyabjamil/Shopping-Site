import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',component:HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component:SignUpComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

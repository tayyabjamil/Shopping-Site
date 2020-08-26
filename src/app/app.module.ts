import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { TextFieldComponent } from './textField/textField.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { CartComponent } from './cart/cart.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxFlowModule, FlowInjectionToken } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
   declarations: [	
      AppComponent,
      HomeComponent,
      AdminComponent,
      LoginComponent,
      SignUpComponent,
      TextFieldComponent,
      CartComponent,
      OrdersComponent
   ],
   imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
   ],
   providers: [
    {
      provide: FlowInjectionToken,
      useValue: Flow
    }
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

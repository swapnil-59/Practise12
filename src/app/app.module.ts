import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoComponent } from './no/no.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { PDetailsComponent } from './p-details/p-details.component';
import { BDetailsComponent } from './b-details/b-details.component';
import { AddressComponent } from './address/address.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { SwapnilComponent } from './swapnil/swapnil.component';
import { NehaComponent } from './neha/neha.component';
import { SonawaneComponent } from './sonawane/sonawane.component';
import { RautComponent } from './raut/raut.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NoComponent,
    UserRegComponent,
    PDetailsComponent,
    BDetailsComponent,
    AddressComponent,
    ContactUsComponent,
    NavbarComponent,
    EmployeeComponent,
    SwapnilComponent,
    NehaComponent,
    SonawaneComponent,
    RautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

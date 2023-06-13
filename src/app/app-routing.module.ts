import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoComponent } from './no/no.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { BDetailsComponent } from './b-details/b-details.component';
import { PDetailsComponent } from './p-details/p-details.component';
import { AddressComponent } from './address/address.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { SwapnilComponent } from './swapnil/swapnil.component';
import { NehaComponent } from './neha/neha.component';
import { SonawaneComponent } from './sonawane/sonawane.component';
import { RautComponent } from './raut/raut.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"user-reg",component:UserRegComponent,
    children:[
{path:"b-details",component:BDetailsComponent},
{path:"p-details",component:PDetailsComponent},
{path:"address",component:AddressComponent},

    ]},
    {path:"contact-us",component:ContactUsComponent},
    {path:"employee",component:EmployeeComponent,
     children:[
      {path:"swapnil",component:SwapnilComponent},
      {path:"neha",component:NehaComponent},
      {path:"sonawane",component:SonawaneComponent},
      {path:"raut",component:RautComponent},

     ]},

  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
productList:any=[
{
  "id":1,
  "title":"IPhone 14",
  "Brand":"Apple",
  "price":1235,
  "ratings":4.89
}
,{
  "id":2,
  "title":"Galaxy S23 Ultra",
  "Brand":"Samsung",
  "price":1135,
  "ratings":4.59
}
,{
  "id":3,
  "title":"Oppo F1",
  "Brand":"Oppo",
  "price":1115,
  "ratings":3.29
},{
  "id":4,
  "title":"Vivo V23",
  "Brand":"Vivo",
  "price":1002,
  "ratings":2.89
}

]
previousSelProductId:string | null=null;
constructor(private router:Router,private route:ActivatedRoute){
  
}
ngOnInit(): void {
  this.previousSelProductId=this.route.snapshot.queryParamMap.get("selectedProductId");
  console.log("PID",this.previousSelProductId);
  
  console.log("Activated Route Output",this.route);
  
}
navigateToProductDetails(id:number){
this.router.navigate(['/product-details',id]);
}
}

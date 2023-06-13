import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  selectProductID: string | null = null;
constructor(private route:ActivatedRoute){
  console.log("route details",route);
}
ngOnInit(): void {
  this.selectProductID=this.route.snapshot.paramMap.get("id");
  console.log(this.selectProductID);
  fetch('http://dummyjson.com/products/'+this.selectProductID)
  .then(res=>res.json())
  .then(console.log);
  
}
}

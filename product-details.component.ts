import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct;
  errorMessege:string="";
  

  constructor(private route:ActivatedRoute,private productservice:ProductServiceService) { }
  
  ngOnInit() {
    const param=this.route.snapshot.paramMap.get('id');
    if(param){
      const id = + param;
      this.getProduct(id);
    }
  }
  getProduct(id) {
    this.productservice.getProduct(id).subscribe(
      product=>this.product=product,
      error =>this.errorMessege=<any>error
    );
  }

}

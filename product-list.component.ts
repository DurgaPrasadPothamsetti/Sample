import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  name:string="";
  someMessege:string;
  filteredProducts: IProduct[];
  constructor(private proser :ProductServiceService) {

   }
  products: IProduct[];
   

  ngOnInit():void {
    this.proser.getProducts().subscribe(
      products => {
        this.products =products;
        this.filteredProducts =this.products;
      }
    )
   
  }
  clickProduct(product){
    this.productId=product.productId;
    this.productName=product.productName;
    this.productCode=product.productCode;
    this.releaseDate=product.releaseDate;
    this.description=product.description;
    this.price=product.price;
    this.starRating=product.starRating;
   
  }
  onRatingClicked(messege){
    this.someMessege=messege;
  }
 

}

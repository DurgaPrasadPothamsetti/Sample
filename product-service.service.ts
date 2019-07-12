import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUrl= './assets/products.json'
  constructor( private http:HttpClient) { }
 // getProducts():Observable<IProduct[]>{
 //   return this.http.get<IProduct[]>(this.productUrl);
 // }
 getProducts(){
   return this.http.get<IProduct[]>(this.productUrl).pipe(
    
   );
 }
  getProduct(id:number):Observable<IProduct | undefined>{
    return this.getProducts().pipe(
      map((products:IProduct[])=> products.find(p=> p.productId === id))
    );

  }
 // private handleError(error : HttpErrorResponse){

 // };
  
 
}

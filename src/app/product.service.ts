import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(product: Product): Observable<any> {
    return this.http.post("http://3.109.48.104:8080/product", product);
  }

  saveChanges(product: Product):Observable<any>{
    return this.http.put("http://3.109.48.104:8080/product", product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get("http://3.109.48.104:8080/products");
  }

  deleteProduct(id:number):Observable<Object>{
    return this.http.delete("http://3.109.48.104:8080/product/"+id);
  }

  getProductById(id:number):Observable<any>{
    return this.http.get("http://3.109.48.104:8080/product/"+id);
  }
}

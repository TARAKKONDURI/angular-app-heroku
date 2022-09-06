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
    return this.http.post("https://pms-sb-code.herokuapp.com/product", product);
  }

  saveChanges(product: Product):Observable<any>{
    return this.http.put("https://pms-sb-code.herokuapp.com/product", product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get("https://pms-sb-code.herokuapp.com/products");
  }

  deleteProduct(id:number):Observable<Object>{
    return this.http.delete("https://pms-sb-code.herokuapp.com/product/"+id);
  }

  getProductById(id:number):Observable<any>{
    return this.http.get("https://pms-sb-code.herokuapp.com/product/"+id);
  }
}

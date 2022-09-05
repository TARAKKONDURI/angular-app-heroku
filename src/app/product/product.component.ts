import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product(0, "", 0.0);
  productEdit:Product=new Product(0, "", 0.0);
  products: Product[] = [];
  @ViewChild('productForm') public productForm!:NgForm;
  @ViewChild('editProductForm') public editProductForm!:NgForm;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

resetForm(){this.productForm.form.reset();}
resetEditForm(){this.editProductForm.form.reset();}

  saveNewProduct() {
    this.service.saveProduct(this.product).subscribe(
      data => {
        let val = document.getElementById("close");
        this.productForm.form.reset();
        val?.click();
        this.getAllProducts();
      }
    )
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe(data => { this.products = data })
  }

  deleteProduct(id:number){
    
     if(confirm("Warning:"+"\n do you want to delete product?")){
      this.service.deleteProduct(id).subscribe(
        data=>{
          this.getAllProducts();
        }
       )
      
    }
  }

  getProductById(id:number){
    this.service.getProductById(id).subscribe(
      data=>{
        this.productEdit=data;
       
        
      }
    )
  }
  saveChanges(){
    this.service.saveChanges(this.productEdit).subscribe(
      data => {
        let val = document.getElementById("edit-close");
        this.productForm.form.reset();
        val?.click();
        this.getAllProducts();
      }
    )
  }
}

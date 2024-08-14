import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
updateEmployee(_t15: Product) {
throw new Error('Method not implemented.');
}

  products?: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(){
    this.fetchProductList();
    
  }
  fetchProductList() {
    this.products = this.productService.getProductsList();
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .subscribe(
      data => {
        console.log(data);
        this.fetchProductList();
      }, 
      error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateProduct(product: Product){
    this.router.navigate(['update', product]);
  }

}

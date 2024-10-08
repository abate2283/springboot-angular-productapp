import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
[x: string]: any;

  id!: number;
  product!: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }

  submitted = false;
  onSubmit(): void {
    this.submitted = true;
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }

}

































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-update-product',
//   templateUrl: './update-product.component.html',
//   styleUrls: ['./update-product.component.css']
// })
// export class UpdateProductComponent {
// submitted: any;
// onSubmit() {
// throw new Error('Method not implemented.');
// }
// product: any;

// }

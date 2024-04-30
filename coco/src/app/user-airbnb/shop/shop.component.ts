import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }


}

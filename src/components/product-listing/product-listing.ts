import { Component } from '@angular/core';
import {ProductsProvider} from '../../providers/products/products';

@Component({
  selector: 'product-listing',
  templateUrl: 'product-listing.html',
  providers: [ProductsProvider]
})
export class ProductListingComponent {

  text: string;
  products;

  constructor(private productsProvider: ProductsProvider) {

    console.log('Hello ProductListingComponent Component');
    this.text = 'Hello World';
    this.products = productsProvider.getProducts();
  }

}

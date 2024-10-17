import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { Product } from './types';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductFormComponent,
    BootstrapComponentsComponent,
    NgFor,
    CurrencyPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: Product[] = [
    {
      name: 'Pelota',
      description: 'Inflable y divertida',
      price: 10.0,
    },
  ];

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}

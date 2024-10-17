import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../types';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  productForm = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
  });

  @Output() addProduct = new EventEmitter<Product>();

  onSubmit() {
    if (
      !this.productForm.value.name ||
      !this.productForm.value.price ||
      !this.productForm.value.description
    ) {
      return;
    }

    this.addProduct.emit({
      name: this.productForm.value.name!,
      price: this.productForm.value.price!,
      description: this.productForm.value.description!,
    });

    this.productForm.reset();
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  //local array to simulate a database
  private products = [
    { id: 1, productName: 'Product 1', category: 'Category 1' },
    { id: 2, productName: 'Product 2', category: 'Category 2' },
    { id: 3, productName: 'Product 3', category: 'Category 1' },
  ];

  create(product: CreateProductDto) {
    const newProduct = { id: this.products.length + 1, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }
}

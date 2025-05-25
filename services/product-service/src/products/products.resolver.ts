import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import {
  Product,
  CreateProductInput,
  UpdateProductInput,
} from './entities/product.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  @Query(() => [Product])
  products() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  product(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('input') input: UpdateProductInput) {
    return this.productService.update(input);
  }

  @Mutation(() => Product)
  deleteProduct(@Args('id') id: string) {
    return this.productService.remove(id);
  }
}

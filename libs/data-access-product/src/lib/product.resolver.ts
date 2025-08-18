// apps/api/src/app/products/products.resolver.ts
import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './models/product.model';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productsService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { nullable: true })
  async product(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne({ id });
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('image') image: string,
    @Args('name', { nullable: true }) name?: string
  ) {
    return this.productsService.create({ data: { image, name } });
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.delete({ id });
  }
}

import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './product.model';

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  products(): Product[] {
    return [
      { id: '1', name: 'Laptop', price: 1000 },
      { id: '2', name: 'Phone', price: 500 },
    ];
  }
}

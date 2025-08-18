// apps/api/src/app/products/models/product.model.ts
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id!: string;

  @Field()
  image!: string;

  @Field({ nullable: true })
  name?: string;
}

import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  category?: string;
}

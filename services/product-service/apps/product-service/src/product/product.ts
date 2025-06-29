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

  @Field(() => [String])
  imageUrls: Array<string>;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  sku?: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field()
  isActive?: boolean;

  @Field({ nullable: true })
  discount?: number;

  @Field({ nullable: true })
  averageRating?: number;

  @Field(() => Int, { nullable: true })
  totalReviews?: number;

  @Field(() => [String], { nullable: true })
  tags?: string[];
}

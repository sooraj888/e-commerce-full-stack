import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field(() => String)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  isAvailable?: boolean;

  @Field({ nullable: true })
  category?: string;
}

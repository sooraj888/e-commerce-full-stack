import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  category?: string;
}

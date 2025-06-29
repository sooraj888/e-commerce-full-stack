import { ObjectType } from '@nestjs/graphql';
import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Role } from '../enums/role.enum';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => Role)
  role: Role;

  @Field()
  profileImage: string;

  @Field()
  password: string;
}

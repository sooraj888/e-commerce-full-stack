import { ObjectType } from '@nestjs/graphql';
import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Role } from '../enums/role.enum';
// import { Role } from '@prisma/client';

@InputType()
export class UserCreateInput {
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

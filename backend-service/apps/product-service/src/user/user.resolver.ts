import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateInput } from './dto/user-create';
import { User } from './entities/user';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.userService.createUser(createUserInput);
  }
}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  defaultResolver() {
    return 'Resolving default query from AppResolver!';
  }
}

import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class NestCoreResolver {
  @Query(() => Float)
  uptime() {
    return process.uptime();
  }
}

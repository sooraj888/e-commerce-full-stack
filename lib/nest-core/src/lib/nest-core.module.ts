import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  apiGatewayConfiguration,
  userConfiguration,
} from './config/configuration';
import { validationSchema } from './config/validation';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generates schema.gql automatically
      playground: false, // Enables the GraphQL Playground
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: true,
      plugins: [
        // Install a landing page plugin based on NODE_ENV
        process.env['NODE_ENV'] === 'production'
          ? ApolloServerPluginLandingPageProductionDefault({
              // graphRef: 'my-graph-id@my-graph-variant',
              footer: false,
            })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [apiGatewayConfiguration, userConfiguration],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class NestCoreModule {}

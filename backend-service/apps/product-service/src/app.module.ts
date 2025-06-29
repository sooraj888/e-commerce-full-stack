import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TestController } from './testApi/test.controller';
import { AppResolver } from './AppResolver';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generates schema.gql automatically
      playground: false, // Enables the GraphQL Playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ClientsModule.register([
      { name: 'auth-service', transport: Transport.TCP },
    ]),
    ProductModule,
    UserModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService, AppResolver],
})
export class AppModule {}

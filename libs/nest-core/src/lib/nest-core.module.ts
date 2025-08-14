import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  apiGatewayConfiguration,
  userConfiguration,
} from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [apiGatewayConfiguration, userConfiguration],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class NestCoreModule {}

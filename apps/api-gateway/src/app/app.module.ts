import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestCoreModule } from '@myrepo/nest-core';
import { DataAccessProductsModule } from '@myrepo/data-access-products';

@Module({
  imports: [NestCoreModule, DataAccessProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

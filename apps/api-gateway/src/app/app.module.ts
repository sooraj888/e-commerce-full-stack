import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestCoreModule } from '@myrepo/nest-core';
import { DataAccessProductModule } from '@myrepo/data-access-product';

@Module({
  imports: [NestCoreModule, DataAccessProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

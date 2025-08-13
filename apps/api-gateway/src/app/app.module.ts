import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestCoreModule } from '@myrepo/nest-core';

@Module({
  imports: [NestCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MyPrismaClientModule } from '@myrepo/my-prisma-client';

@Module({
  controllers: [],
  providers: [ProductsService],
  exports: [ProductsService],
  imports: [MyPrismaClientModule],
})
export class DataAccessProductsModule {}

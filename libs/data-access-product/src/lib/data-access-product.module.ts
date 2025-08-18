import { Module } from '@nestjs/common';
import { MyPrismaClientModule } from '@myrepo/my-prisma-client';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
@Module({
  controllers: [],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
  imports: [MyPrismaClientModule],
})
export class DataAccessProductModule {}

import { Module } from '@nestjs/common';
import { MyPrismaClientModule } from '@myrepo/my-prisma-client';
import { ProductService } from './product.service';
@Module({
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
  imports: [MyPrismaClientModule],
})
export class DataAccessProductModule {}

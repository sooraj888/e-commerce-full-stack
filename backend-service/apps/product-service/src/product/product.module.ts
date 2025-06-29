import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [PrismaModule], // 👈 Add this
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}

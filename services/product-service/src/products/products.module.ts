import { Module } from '@nestjs/common';
// import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { ProductResolver } from './products.resolver';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  // controllers: [ProductsController],
  providers: [ProductsService, ProductResolver],
})
export class ProductsModule {}

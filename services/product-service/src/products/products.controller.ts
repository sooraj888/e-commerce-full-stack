import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  // The validation only works if your CreateProductDto is properly decorated with class-validator decorators.
  // Example:
  // import { IsString, IsNotEmpty } from 'class-validator';
  // export class CreateProductDto {
  //   @IsString()
  //   @IsNotEmpty()
  //   productName: string;
  //
  //   @IsString()
  //   @IsNotEmpty()
  //   category: string;
  // }
  //
  // If your DTO is missing these, validation will not work as expected.
  @Get()
  findAll() {
    return {
      message: 'This action returns all products',
      products: this.productsService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a product with id: ${id}`;
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return `This action returns products in category with id: ${categoryId}`;
  }

  @Get('search/:query')
  search(@Param('query') query: string) {
    return `This action returns products matching the search query: ${query}`;
  }

  @Get('featured')
  findFeatured() {
    return 'This action returns featured products';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a product with id: ${id}`;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsService } from '@myrepo/data-access-products';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductsService
  ) {
    // private readonly productService: ProductsService;
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('sdajfjgsdfjgashdg')
  healthCheck() {
    console.log('Health check endpoint hit');
    return { status: 'okdddddddfbsdnmfmsbmnfmdddd' };
  }

  @Get('product/:id')
  async getProductById(@Param('id') id: string) {
    return this.productService.product({ id: Number(id) });
  }
}

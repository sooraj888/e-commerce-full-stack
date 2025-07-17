import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductsModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.PRODUCTS_SERVICE_HOST || 'localhost',
        port: parseInt(process.env.PRODUCTS_SERVICE_PORT || '', 10) || 3002,
      },
    },
  );
  await app.listen();
  console.log(
    `Products service is running on port ${process.env.PRODUCTS_SERVICE_PORT || 3002}`,
  );
}
bootstrap();

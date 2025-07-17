import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(process.env.port ?? 3001);
  console.log(`Main service is running on port ${process.env.port ?? 3001}`);
}
bootstrap();

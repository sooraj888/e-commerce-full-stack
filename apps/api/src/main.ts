import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { networkInterfaces } from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  app.enableCors();
  await app.listen(PORT, '0.0.0.0');

  // Method 2: Constructing manually from PORT and HOST
  const host = process.env.HOST || 'localhost';
  const manualUrl = `http://${host}:${PORT}`;

  console.log(`Manual URL: ${manualUrl}`);

  const server = app.getHttpServer();
  console.log(`React Native base URL: http://${host}:${PORT}`);
  const address = server.address();
  if (address && typeof address === 'object') {
    const protocol =
      app.getHttpAdapter().getType() === 'https' ? 'https' : 'http';
    const localUrl = `${protocol}://localhost:${address.port}`;
    const networkUrl = `${protocol}://${address.address}:${address.port}`;
    console.log(`Server listening at:`);
    console.log(`  Local:   ${localUrl}`);
    console.log(`  Network: ${networkUrl}`);

    console.log(`  Manual:  ${manualUrl}`);
    console.log(`  React Native base URL: ${networkUrl}`);

    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]!) {
        // Skip over internal (i.e. 127.0.0.1) and non-IPv4 addresses
        if (net.family === 'IPv4' && !net.internal) {
          const ipUrl = `${protocol}://${net.address}:${address.port}`;
          console.log(`  IP:      ${ipUrl}`);
        }
      }
    }
  }
}
bootstrap();

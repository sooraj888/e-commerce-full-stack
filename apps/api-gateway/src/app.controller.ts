import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.TCP,
    options: { port: 3002, host: 'localhost' },
  })
  client: ClientProxy;

  @Get()
  getHello() {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.client.send<number>(pattern, payload);
  }
}

import { Controller, Get } from '@nestjs/common';
import { MainService } from './main.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3002 },
  })
  client: ClientProxy;

  @Get()
  async getHello() {
    console.log('Calling Products service...');
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3, 4, 5, 10, 30];
    return this.client.send(pattern, payload);
  }
}

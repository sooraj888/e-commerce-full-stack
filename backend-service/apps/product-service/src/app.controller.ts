import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3001 },
  })
  client: ClientProxy;

  @Get()
  async getSum() {
    const pattern = { cmd: 'add' };
    const payload = [1, 2, 3, 4, 5, 10, 30];
    return this.client.send(pattern, payload);
  }
}

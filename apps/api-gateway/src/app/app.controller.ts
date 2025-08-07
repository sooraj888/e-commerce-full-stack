import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('sdajfjgsdfjgashdg')
  healthCheck() {
    console.log('Health check endpoint hit');
    return { status: 'okdddddddfbsdnmfmsbmnfmdddd' };
  }
}

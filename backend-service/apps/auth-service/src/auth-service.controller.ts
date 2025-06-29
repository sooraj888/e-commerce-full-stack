import { Controller, Get } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @MessagePattern({ cmd: 'add' })
  async accumulate(data: number[]): Promise<number> {
    return (data || []).reduce((a, b) => a + b);
  }
}

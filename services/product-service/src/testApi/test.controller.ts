import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTestDto } from './create-test.dto';
import { get } from 'http';

let a = 0;
@Controller('test')
export class TestController {
  @Post()
  @HttpCode(201)
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  @HttpCode(200)
  getTest(): Number | string {
    return 'Test endpoint is working!';
  }

  @Get('testAsync')
  async findAll(): Promise<any> {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json(),
    );
    return data;
  }

  @Post('testRequestBodyData')
  testRequestBodyData(@Body() body: CreateTestDto): string {
    return `This is request body data ${JSON.stringify(body.email)}`;
  }

  @Get('testQueryParams')
  testQueryParams(@Query('filter') filter: boolean): string {
    return `This is query params data ${filter}`;
  }

  @Get(':id')
  testId(@Param() params: any): object {
    a++;
    return { message: `This is ID endpoint ${a}` };
  }
}

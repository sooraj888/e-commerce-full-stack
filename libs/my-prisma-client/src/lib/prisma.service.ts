import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@myrepo/my-prisma-schema-client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

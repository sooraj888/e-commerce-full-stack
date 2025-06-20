import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}

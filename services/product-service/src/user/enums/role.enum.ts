// src/user/enums/role.enum.ts
import { registerEnumType } from '@nestjs/graphql';
import { Role as PrismaRole } from '@prisma/client';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User roles',
});

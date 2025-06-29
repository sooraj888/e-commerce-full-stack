import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(data: {
    email: string;
    name: string;
    role: Role;
    profileImage: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }
}

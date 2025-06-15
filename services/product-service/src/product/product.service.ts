// product.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductInput) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
